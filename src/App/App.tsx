import React from "react";
import styled from "styled-components";

const Score = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  text-align: center;
`;

interface BoardProps {
  readonly width: number;
  readonly height: number;
}

const Board = styled.div<BoardProps>`
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

interface TileProps {
  readonly size: number;
}

const Tile = styled.div<TileProps>`
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  transition-property: background, box-shadow, opacity, transform;
  transform: translateZ(0);
  transition-duration: 3000ms;

  width: ${props => props.size}px;
  height: ${props => props.size}px;

  ::before {
    bottom: 0;
    content: "";
    height: 0;
    left: 0;
    margin: auto;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    transition: opacity 300ms;
  }
`;

export const App: React.FC = () => {
  const score = 0;

  const rows = 10;
  const columns = 15;
  const boardRatio = columns / rows;

  const stageWidth = Math.floor(window.innerWidth * 0.8);
  const stageHeight = Math.floor(window.innerHeight * 0.8);
  const stageRatio = stageWidth / stageHeight;

  let tileSize = boardRatio > 1 ? Math.floor(stageWidth / columns) : Math.floor(stageWidth / rows);
  if (stageRatio > 1) {
    tileSize = boardRatio > 1 ? Math.floor(stageHeight / rows) : Math.floor(stageHeight / columns);
  }

  const board: number[][] = Array(rows).fill(Array(columns).fill(0));

  const tiles = board.flatMap((row, y) =>
    row.map((_, x) => (
      <Tile
        size={tileSize - 1}
        key={`${x}:${y}`}
        style={{
          left: x * tileSize,
          top: y * tileSize
        }}
      />
    ))
  );

  return (
    <>
      <Score>{score}</Score>
      <Board width={columns * tileSize} height={rows * tileSize}>
        {tiles}
      </Board>
    </>
  );
};

import React from "react";
import styled, { keyframes } from "styled-components";

const flashing = (shadowSize: number) => keyframes`
  from {
    transform: scale(1.0);
    box-shadow: #77FF33 0 0 ${shadowSize}px;
  }
  50% {
    transform: scale(0.5);
    box-shadow: #77FF33 0 0 ${shadowSize / 3}px;
  }
  to {
    transform: scale(1.0);
    box-shadow: #77FF33 0 0 ${shadowSize}px;
  }
`;

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

const FoodTile = styled(Tile)`
  animation: ${props => flashing(props.size)} 1500ms ease-in-out infinite;
  background-color: #77ff33;
  opacity: 1;
`;

interface SnakeTileProps extends TileProps {
  readonly alpha: number;
}

const SnakeTile = styled(Tile)<SnakeTileProps>`
  background-color: rgba(255, 255, 255, ${props => props.alpha});
  opacity: 1;
`;

export const App: React.FC = () => {
  const score = 0;

  const rows = 20;
  const columns = 30;
  const boardRatio = columns / rows;

  const stageWidth = Math.floor(window.innerWidth * 0.8);
  const stageHeight = Math.floor(window.innerHeight * 0.8);
  const stageRatio = stageWidth / stageHeight;

  let tileSize = boardRatio > 1 ? Math.floor(stageWidth / columns) : Math.floor(stageWidth / rows);
  if (stageRatio > 1) {
    tileSize = boardRatio > 1 ? Math.floor(stageHeight / rows) : Math.floor(stageHeight / columns);
  }

  const board: number[][] = Array(rows)
    .fill(0)
    .map(() => Array(columns).fill(0));

  const x = Math.floor(Math.random() * columns);
  const y = Math.floor(Math.random() * rows);
  board[y][x] = -1;

  board[5][5] = 1;
  board[5][6] = 2;
  board[5][7] = 3;

  const tiles = board.flatMap((row, y) =>
    row.map((val, x) => {
      const props = {
        size: tileSize - 1,
        key: `${x}:${y}`,
        style: {
          left: x * tileSize,
          top: y * tileSize
        },
        alpha: 1.0
      };
      let tile = Tile;
      if (val === -1) {
        tile = FoodTile;
      } else if (val > 0) {
        tile = SnakeTile;
        props.alpha = 1 / val;
      }
      return React.createElement(tile, props);
    })
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

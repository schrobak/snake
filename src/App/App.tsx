import React from "react";
import styled, { keyframes } from "styled-components";
import useWindowSize from "../hooks/useWindowSize";

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

const Stage = styled.div`
  align-content: center;
  justify-content: center;
  display: grid;
  position: absolute;
  width: 100%;
  height: 100%;
`;

interface BoardProps {
  readonly rows: number;
  readonly columns: number;
  readonly tileSize: number;
}

const Board = styled.div<BoardProps>`
  width: ${({ columns, tileSize }) => columns * tileSize + (tileSize - 1)}px;
  height: ${({ rows, tileSize }) => rows * tileSize + (tileSize - 1)}px;
  position: relative;
  display: grid;
  grid-template-rows: repeat(${props => props.rows}, ${props => props.tileSize}px);
  grid-template-columns: repeat(${props => props.columns}, ${props => props.tileSize}px);
  grid-gap: 1px;
`;

interface TileProps {
  readonly size: number;
}

const Tile = styled.div<TileProps>`
  background: rgba(0, 0, 0, 0.15);
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
  const rows = 20;
  const columns = 30;

  const [windowWidth, windowHeight] = useWindowSize();
  const stageWidth = Math.floor(windowWidth * 0.9);
  const stageHeight = Math.floor(windowHeight * 0.9);

  const tileSize = Math.min(
    Math.floor(stageWidth / columns),
    Math.floor(stageWidth / rows),
    Math.floor(stageHeight / columns),
    Math.floor(stageHeight / rows)
  );

  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  return (
    <Stage>
      <Board rows={rows} columns={columns} tileSize={tileSize}>
        {tiles}
      </Board>
    </Stage>
  );
};

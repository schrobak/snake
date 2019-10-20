import React from "react";
import { useWindowSize } from "../../hooks";
import { Food, PositionTuple } from "../Food";
import { Stage, Board, Tile } from "../Stage";

export const Game: React.FC = () => {
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

  const position: PositionTuple = [Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)];

  return (
    <Stage>
      <Board rows={rows} columns={columns} tileSize={tileSize}>
        {tiles}
        <Food size={tileSize} position={position} />
      </Board>
    </Stage>
  );
};

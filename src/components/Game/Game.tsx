import React from "react";
import { useFoodPosition, useTileSize } from "hooks";
import { Food } from "components/Food";
import { Stage, Board, Tile } from "components/Stage";

export const Game: React.FC = () => {
  const rows = 20;
  const columns = 30;
  const tileSize = useTileSize(rows, columns);
  const position = useFoodPosition(rows, columns);
  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  return (
    <Stage>
      <Board rows={rows} columns={columns} tileSize={tileSize}>
        {tiles}
        <Food size={tileSize} position={position} />
      </Board>
    </Stage>
  );
};

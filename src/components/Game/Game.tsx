import React from "react";
import { useBoardSize, useTileSize } from "hooks";
import { Food } from "components/Food";
import { Stage, Board, Tile } from "components/Stage";

export const Game: React.FC = () => {
  const [rows, columns] = useBoardSize();
  const tileSize = useTileSize();
  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  return (
    <Stage>
      <Board rows={rows} columns={columns} tileSize={tileSize}>
        {tiles}
        <Food />
      </Board>
    </Stage>
  );
};

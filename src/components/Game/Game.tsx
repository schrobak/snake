import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Food } from "components/Food";
import { Snake } from "components/Snake";
import { Stage, Board, Tile } from "components/Stage";
import { useTileSize } from "hooks";
import { useBoundAction } from "store";
import { setBoardSizeAction } from "store/board/actions";
import { getBoardSize } from "store/board/selectors";
import { parseBoardSize } from "utils";

export const Game: React.FC = () => {
  const [rows, columns] = useSelector(getBoardSize);
  const tileSize = useTileSize();
  const setBoardSize = useBoundAction(setBoardSizeAction);

  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent): void => {
      const url = new URL(event.newURL);
      setBoardSize(parseBoardSize(url.hash));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [setBoardSize]);

  return (
    <Stage>
      <Board rows={rows} columns={columns} tileSize={tileSize}>
        {tiles}
        <Food />
        <Snake />
      </Board>
    </Stage>
  );
};

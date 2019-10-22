import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Food } from "components/Food";
import { Snake } from "components/Snake";
import { Stage, Board, Tile } from "components/Stage";
import { setBoardSizeAction } from "store/board/actions";
import { getBoardSize } from "store/board/selectors";
import { useSnakeDirection, useTileSize } from "hooks";
import { parseBoardSize } from "utils";

export const Game: React.FC = () => {
  useSnakeDirection();
  const dispatch = useDispatch();
  const [rows, columns] = useSelector(getBoardSize);
  const tileSize = useTileSize();
  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent): void => {
      const url = new URL(event.newURL);
      dispatch(setBoardSizeAction(parseBoardSize(url.hash)));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [dispatch]);

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

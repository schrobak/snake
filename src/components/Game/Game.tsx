import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Food } from "components/Food";
import { Snake } from "components/Snake";
import { Stage, Board, Tile } from "components/Stage";
import { useTileSize } from "hooks";
import { setBoardSizeAction } from "store/board/actions";
import { GameState, BoardSize } from "store";
import { getBoardSize } from "utils";

export const Game: React.FC = () => {
  const dispatch = useDispatch();
  const [rows, columns] = useSelector<GameState, BoardSize>(({ board }) => [board.rows, board.columns]);
  const tileSize = useTileSize();
  const tiles = Array(rows * columns)
    .fill(0)
    .map((_, idx) => <Tile key={idx} size={tileSize} />);

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent): void => {
      const url = new URL(event.newURL);
      dispatch(setBoardSizeAction(getBoardSize(url.hash)));
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

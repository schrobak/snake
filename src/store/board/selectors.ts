import { createSelector } from "reselect";
import { GameState } from "store";
import { BoardSize, BoardState } from "./types";

export const getBoardSize = createSelector<GameState, BoardState, BoardSize>(
  [state => state.board],
  ({ rows, columns }) => [rows, columns]
);

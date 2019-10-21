import { createSelector } from "reselect";
import { BoardSize, BoardState, GameState } from "store";

export const getBoardSize = createSelector<GameState, BoardState, BoardSize>(
  [state => state.board],
  ({ rows, columns }) => [rows, columns]
);

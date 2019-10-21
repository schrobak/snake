import { BoardSize } from "types";
import { BoardActionTypes, SET_BOARD_SIZE } from "./types";

export const setBoardSize = (boardSize: BoardSize): BoardActionTypes => ({
  type: SET_BOARD_SIZE,
  boardSize
});

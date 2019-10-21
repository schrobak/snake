import { BoardActionTypes, BoardSize, SET_BOARD_SIZE } from "./types";

export const setBoardSizeAction = (boardSize: BoardSize): BoardActionTypes => ({
  type: SET_BOARD_SIZE,
  boardSize
});

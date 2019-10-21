import { BoardSize } from "types";

export interface BoardState {
  rows: number;
  columns: number;
}

export const SET_BOARD_SIZE = "SET_BOARD_SIZE";

interface SetBoardSize {
  type: typeof SET_BOARD_SIZE;
  boardSize: BoardSize;
}

export type BoardActionTypes = SetBoardSize;

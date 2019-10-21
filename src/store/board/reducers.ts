import { getBoardSize } from "utils";

import { BoardActionTypes, BoardState } from "./types";

const [initialRows, initialColumns] = getBoardSize(window.location.hash);

const initialState: BoardState = {
  rows: initialRows,
  columns: initialColumns
};

export const boardReducer = (state = initialState, action: BoardActionTypes): BoardState => {
  switch (action.type) {
    case "SET_BOARD_SIZE": {
      const [rows, columns] = action.boardSize;
      return {
        ...state,
        rows,
        columns
      };
    }
    default:
      return state;
  }
};

import { BoardActionTypes, BoardState } from "./types";

const initialState: BoardState = {
  rows: 0,
  columns: 0
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

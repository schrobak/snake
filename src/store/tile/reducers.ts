import { SET_TILE_SIZE, TileActionTypes, TileState } from "./types";
import { Reducer } from "redux";

const initialState: TileState = {
  size: 0
};

type TileReducer = Reducer<typeof initialState, TileActionTypes>;

export const tileReducer: TileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TILE_SIZE: {
      return {
        ...state,
        size: action.size
      };
    }
    default:
      return state;
  }
};

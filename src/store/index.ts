import { useCallback } from "react";
import { combineReducers } from "redux";
import { useDispatch } from "react-redux";

import { boardReducer } from "./board/reducers";
import { snakeReducer } from "./snake/reducers";
import { foodReducer } from "./food/reducers";
import { tileReducer } from "./tile/reducers";

export const rootReducer = combineReducers({
  board: boardReducer,
  snake: snakeReducer,
  food: foodReducer,
  tile: tileReducer
});

export type GameState = ReturnType<typeof rootReducer>;

export function useBoundAction<T extends (...args: any[]) => any>(actionCreator: T) {
  const dispatch = useDispatch();
  return useCallback((...args: Parameters<T>): void => dispatch(actionCreator(...args)), [actionCreator, dispatch]);
}

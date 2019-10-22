import { useCallback, useEffect } from "react";

import { getRandomPosition } from "utils";

import { useDispatch, useSelector } from "react-redux";
import { getBoardSize } from "store/board/selectors";
import { GridPosition } from "store/food/types";
import { setFoodPositionAction } from "store/food/actions";
import { getFoodPosition } from "store/food/selectors";

export const useFoodPosition = (): GridPosition => {
  const dispatch = useDispatch();
  const setFoodPosition = useCallback((position: GridPosition) => dispatch(setFoodPositionAction(position)), [
    dispatch
  ]);
  const [rows, columns] = useSelector(getBoardSize);
  const position = useSelector(getFoodPosition);

  useEffect(() => {
    setFoodPosition(getRandomPosition(rows, columns));
  }, [setFoodPosition, rows, columns]);

  return position;
};

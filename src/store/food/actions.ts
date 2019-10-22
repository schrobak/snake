import { GridPosition } from "store/food/types";

import { FoodActionTypes, SET_FOOD_POSITION } from "./types";

export const setFoodPositionAction = (position: GridPosition): FoodActionTypes => ({
  type: SET_FOOD_POSITION,
  position
});

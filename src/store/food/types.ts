export type GridPosition = [number, number];

export interface FoodState {
  position: {
    x: number;
    y: number;
  };
}

export const SET_FOOD_POSITION = "SET_FOOD_POSITION";

interface SetFoodPosition {
  type: typeof SET_FOOD_POSITION;
  position: GridPosition;
}

export type FoodActionTypes = SetFoodPosition;

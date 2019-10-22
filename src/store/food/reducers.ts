import { FoodActionTypes, FoodState, SET_FOOD_POSITION } from "./types";

const initialState: FoodState = {
  position: {
    x: 0,
    y: 0
  }
};

export const foodReducer = (state = initialState, action: FoodActionTypes): FoodState => {
  switch (action.type) {
    case SET_FOOD_POSITION: {
      const [x, y] = action.position;
      return {
        ...state,
        position: {
          x,
          y
        }
      };
    }
    default:
      return state;
  }
};

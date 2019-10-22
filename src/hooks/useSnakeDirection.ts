import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useBoundAction } from "store";
import { getSnakeDirection } from "store/snake/selectors";
import { setSnakeDirectionAction } from "store/snake/actions";
import { CheckKeyCode, SnakeDirection } from "store/snake/types";

const isKeyUp: CheckKeyCode = code => ["ArrowUp", "KeyW"].includes(code);
const isKeyDown: CheckKeyCode = code => ["ArrowDown", "KeyS"].includes(code);
const isKeyLeft: CheckKeyCode = code => ["ArrowLeft", "KeyA"].includes(code);
const isKeyRight: CheckKeyCode = code => ["ArrowRight", "KeyD"].includes(code);

export const useSnakeDirection = () => {
  const direction = useSelector(getSnakeDirection);
  const setSnakeDirection = useBoundAction(setSnakeDirectionAction);

  useEffect(() => {
    const handleDirectionChange = ({ code }: KeyboardEvent): void => {
      if (isKeyUp(code) && ![SnakeDirection.UP, SnakeDirection.DOWN].includes(direction)) {
        setSnakeDirection(SnakeDirection.UP);
      } else if (isKeyDown(code) && ![SnakeDirection.UP, SnakeDirection.DOWN].includes(direction)) {
        setSnakeDirection(SnakeDirection.DOWN);
      } else if (isKeyLeft(code) && ![SnakeDirection.LEFT, SnakeDirection.RIGHT].includes(direction)) {
        setSnakeDirection(SnakeDirection.LEFT);
      } else if (isKeyRight(code) && ![SnakeDirection.LEFT, SnakeDirection.RIGHT].includes(direction)) {
        setSnakeDirection(SnakeDirection.RIGHT);
      }
    };
    window.addEventListener("keydown", handleDirectionChange);
    return () => window.removeEventListener("keydown", handleDirectionChange);
  }, [direction, setSnakeDirection]);

  return direction;
};

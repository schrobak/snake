import { useEffect, useState } from "react";

export enum SnakeDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

const isKeyUp = (code: string): boolean => ["ArrowUp", "KeyW"].includes(code);
const isKeyDown = (code: string): boolean => ["ArrowDown", "KeyS"].includes(code);
const isKeyLeft = (code: string): boolean => ["ArrowLeft", "KeyA"].includes(code);
const isKeyRight = (code: string): boolean => ["ArrowRight", "KeyD"].includes(code);

export const useSnakeDirection = () => {
  const [direction, setDirection] = useState(SnakeDirection.RIGHT);

  useEffect(() => {
    const handleDirectionChane = ({ code }: KeyboardEvent): void => {
      if (isKeyUp(code) && direction !== SnakeDirection.DOWN) {
        setDirection(SnakeDirection.UP);
      } else if (isKeyDown(code) && direction !== SnakeDirection.UP) {
        setDirection(SnakeDirection.DOWN);
      } else if (isKeyLeft(code) && direction !== SnakeDirection.RIGHT) {
        setDirection(SnakeDirection.LEFT);
      } else if (isKeyRight(code) && direction !== SnakeDirection.LEFT) {
        setDirection(SnakeDirection.RIGHT);
      }
    };
    window.addEventListener("keydown", handleDirectionChane);
    return () => window.removeEventListener("keydown", handleDirectionChane);
  }, [direction]);

  return direction;
};

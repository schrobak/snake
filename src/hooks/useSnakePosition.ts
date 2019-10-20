import { useEffect, useRef, useState } from "react";
import { PositionTuple } from "types";
import { useBoardSize } from "./useBoardSize";

export enum SnakeDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export const getRandomPosition = (rows: number, columns: number): PositionTuple => [
  Math.floor(Math.random() * columns),
  Math.floor(Math.random() * rows)
];

export const useSnakePosition = (): PositionTuple => {
  const [rows, columns] = useBoardSize();
  const [position, setPosition] = useState(getRandomPosition(rows, columns));
  const [time, setTime] = useState(Date.now());
  const [collision, setCollision] = useState(false);
  const tick = useRef(time);
  const [x, y] = position;

  useEffect(() => {
    setPosition(getRandomPosition(rows, columns));
  }, [rows, columns]);

  useEffect(() => {
    if (collision) {
      console.debug("Game Over");
      return;
    }

    const currentTime = Date.now();
    const delta = currentTime - tick.current;

    if (delta >= 1000) {
      tick.current = currentTime;

      if (x + 1 >= columns || y + 1 >= rows || y <= 0) {
        setCollision(true);
        return;
      }

      setPosition([x, y - 1]);
    }

    const timer = setTimeout(() => setTime(currentTime), 0);
    return () => clearTimeout(timer);
  }, [collision, columns, rows, time, x, y]);

  return position;
};

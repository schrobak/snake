import { useEffect, useRef, useState } from "react";
import { PositionTuple } from "types";
import { useBoardSize } from "./useBoardSize";
import { SnakeDirection, useSnakeDirection } from "./useSnakeDirection";

export const getRandomPosition = (rows: number, columns: number): PositionTuple => [
  Math.floor(Math.random() * columns),
  Math.floor(Math.random() * rows)
];

export const useSnakePosition = (): PositionTuple => {
  const [rows, columns] = useBoardSize();
  const [position, setPosition] = useState(getRandomPosition(rows, columns));
  const [time, setTime] = useState(Date.now());
  const [collision, setCollision] = useState(false);
  const direction = useSnakeDirection();
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

    if (delta >= 200) {
      tick.current = currentTime;

      if (x + 1 >= columns || y + 1 >= rows || x <= 0 || y <= 0) {
        setCollision(true);
        return;
      }

      if (direction === SnakeDirection.UP) {
        setPosition([x, y - 1]);
      } else if (direction === SnakeDirection.DOWN) {
        setPosition([x, y + 1]);
      } else if (direction === SnakeDirection.LEFT) {
        setPosition([x - 1, y]);
      } else if (direction === SnakeDirection.RIGHT) {
        setPosition([x + 1, y]);
      }
    }

    const timer = setTimeout(() => setTime(currentTime), 0);
    return () => clearTimeout(timer);
  }, [collision, columns, direction, rows, time, x, y]);

  return position;
};

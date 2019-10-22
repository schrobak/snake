import { BoardSize } from "store/board/types";
import { GridPosition } from "store/food/types";

export const getRandomPosition = (rows: number, columns: number): GridPosition => [
  Math.floor(Math.random() * columns),
  Math.floor(Math.random() * rows)
];

export const parseBoardSize = (hash: string): BoardSize => {
  const [rows = 20, columns = 30] = hash
    .substr(1)
    .split("x")
    .map(v => Number(v) || undefined);

  return [rows, columns];
};

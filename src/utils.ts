import { PositionTuple } from "types";
import { BoardSize } from "store/board/types";

export const getRandomPosition = (rows: number, columns: number): PositionTuple => [
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

import { PositionTuple } from "types";

export const getRandomPosition = (rows: number, columns: number): PositionTuple => [
  Math.floor(Math.random() * columns),
  Math.floor(Math.random() * rows)
];

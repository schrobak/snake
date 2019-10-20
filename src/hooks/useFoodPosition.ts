import { useEffect, useState } from "react";
import { PositionTuple } from "types";

export const useFoodPosition = (rows: number, columns: number): PositionTuple => {
  const [position, setPosition] = useState<PositionTuple>([0, 0]);

  useEffect(() => {
    setPosition([Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]);
  }, [rows, columns]);

  return position;
};

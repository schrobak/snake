import { useEffect, useState } from "react";
import { PositionTuple } from "types";
import { useBoardSize } from "./useBoardSize";

export const useFoodPosition = (): PositionTuple => {
  const [rows, columns] = useBoardSize();
  const [position, setPosition] = useState<PositionTuple>([0, 0]);

  useEffect(() => {
    setPosition([Math.floor(Math.random() * columns), Math.floor(Math.random() * rows)]);
  }, [rows, columns]);

  return position;
};

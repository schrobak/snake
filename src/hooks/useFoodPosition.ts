import { useEffect, useState } from "react";

import { PositionTuple } from "types";
import { getRandomPosition } from "utils";

import { useBoardSize } from "./useBoardSize";

export const useFoodPosition = (): PositionTuple => {
  const [rows, columns] = useBoardSize();
  const [position, setPosition] = useState<PositionTuple>(getRandomPosition(rows, columns));

  useEffect(() => {
    setPosition(getRandomPosition(rows, columns));
  }, [rows, columns]);

  return position;
};

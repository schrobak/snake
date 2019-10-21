import { useEffect, useState } from "react";

import { PositionTuple } from "types";
import { getRandomPosition } from "utils";

import { useSelector } from "react-redux";
import { BoardSize, GameState } from "store";

export const useFoodPosition = (): PositionTuple => {
  const [rows, columns] = useSelector<GameState, BoardSize>(({ board }) => [board.rows, board.columns]);
  const [position, setPosition] = useState<PositionTuple>(getRandomPosition(rows, columns));

  useEffect(() => {
    setPosition(getRandomPosition(rows, columns));
  }, [rows, columns]);

  return position;
};

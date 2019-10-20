import { useEffect, useState } from "react";
import { BoardSize } from "types";

export const getBoardSize = (hash: string): BoardSize => {
  const [rows = 20, columns = 30] = hash
    .substr(1)
    .split("x")
    .map(v => Number(v) || undefined);

  return [rows, columns];
};

export const useBoardSize = (): BoardSize => {
  const [boardSize, setBoardSize] = useState(getBoardSize(window.location.hash));

  useEffect(() => {
    const handleHashChange = (event: HashChangeEvent): void => {
      const url = new URL(event.newURL);
      setBoardSize(getBoardSize(url.hash));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return boardSize;
};

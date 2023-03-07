import type { Cell } from "./../types";
import { randomNumber } from "./randomNumber";

export const generateCellsArray = (length: number, startId: number = 1): Cell[] => {
  return Array.from({ length }, (_, i) => ({
    id: i + startId,
    amount: randomNumber(),
  }));
};

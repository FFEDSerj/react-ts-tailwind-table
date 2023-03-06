import type { Cell } from "./../types";
import { randomNumber } from "./randomNumber";

export const generateCellsArray = (length: number): Cell[] => {
  return Array.from({ length }, (_, i) => ({
    id: i + 1,
    amount: randomNumber(),
  }));
};

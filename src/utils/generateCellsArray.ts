import { randomIntBetweenTwoBounds } from "./randomIntBetweenTwoBounds";
import type { Cell } from "./../types";

export const generateCellsArray = (
  length: number,
  startId: number = 1
): Cell[] => {
  return Array.from({ length }, (_, i) => ({
    id: i + startId,
    amount: randomIntBetweenTwoBounds(100, 999),
  }));
};

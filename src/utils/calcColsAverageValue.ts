import type { Cell } from '../types';

export const calcColsAverageValue = (colNum: number, rowNum: number, cells: Cell[]) => {
  const collSumList: number[] = [];
  
  for (let i = 0; i < colNum; i++) {
    let collSum = 0;

    for (let j = i; j < cells.length; j += colNum) {
      collSum += cells[j].amount;
    }
    const average = Math.round(collSum / rowNum);

    collSumList.push(average);
  }

  return collSumList;
}
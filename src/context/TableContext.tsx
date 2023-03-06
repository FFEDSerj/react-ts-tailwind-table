import { createContext, ReactNode, useContext, useState } from "react";
import type { Cell } from "../types";
import { generateCellsArray } from "../utils/generateCellsArray";
import { randomNumber } from "../utils/randomNumber";

interface ITableContext {
  cells: Cell[];
  rowsNumber: number;
  colsNumber: number;
  incrementCellAmountByOne: (id: Cell["id"]) => void;
}

const initialData: ITableContext = {
  cells: [],
  rowsNumber: 0,
  colsNumber: 0,
  incrementCellAmountByOne: (id) => {},
};

const TableContext = createContext<ITableContext>(initialData);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const ROWS = 10; // For now
  const COLS = 10; // For now

  const [cells, setCells] = useState<Cell[]>(generateCellsArray(ROWS * COLS));

  const incrementCellAmountByOne = (id: Cell["id"]) => {
    const cellsCopy = cells.slice().map((cell) => {
      if (cell.id === id) {
        return {
          ...cell,
          amount: cell.amount + 1,
        };
      }
      return cell;
    });

    setCells(cellsCopy);
  };

  const value = {
    cells,
    rowsNumber: ROWS,
    colsNumber: COLS,
    incrementCellAmountByOne,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableData = () => useContext(TableContext);

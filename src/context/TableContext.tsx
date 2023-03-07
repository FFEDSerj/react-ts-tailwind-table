import { createContext, ReactNode, useContext, useState } from "react";
import type { Cell } from "../types";
import { generateCellsArray } from "../utils/generateCellsArray";

interface ITableContext {
  cells: Cell[];
  rowNumber: number;
  colNumber: number;
  incrementCellAmountByOne: (id: Cell["id"]) => void;
  removeRow: (id: number) => void;
  addRow: () => void;
}

const initialData: ITableContext = {
  cells: [],
  rowNumber: 0,
  colNumber: 0,
  incrementCellAmountByOne: (id) => {},
  removeRow: (id) => {},
  addRow: () => null,
};

const TableContext = createContext<ITableContext>(initialData);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [rowNumber, setRowNumber] = useState(11);
  const [colNumber, setColNumber] = useState(10);

  const [cells, setCells] = useState<Cell[]>(
    generateCellsArray(rowNumber * colNumber)
  );

  const removeRow = (id: number) => {
    const startIndex = cells.findIndex((c) => c.id === id);

    const newCells = [
      ...cells.slice(0, startIndex),
      ...cells.slice(startIndex + colNumber),
    ];

    setCells(newCells);
    setRowNumber(rowNumber - 1);
  };

  const addRow = () => {
    const lastCellId = (cells.at(-1)?.id ?? 0) + 1;
    setCells((prev) =>
      prev.concat(...generateCellsArray(colNumber, lastCellId))
    );
    setRowNumber(rowNumber + 1);
  };

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
    rowNumber,
    colNumber,
    incrementCellAmountByOne,
    removeRow,
    addRow,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableData = () => useContext(TableContext);

import { createContext, ReactNode, useContext, useReducer } from "react";
import { generateCellsArray } from "../utils/generateCellsArray";
import { getClosestAmountCells } from "../utils/getClosestAmountCells";
import type { Cell, TableNet } from "../types";

interface ITableContext {
  cells: Cell[];
  rowNumber: number;
  colNumber: number;
  isTableReady: boolean;
  incrementCellAmountByOne: (id: Cell["id"]) => void;
  removeRow: (id: number) => void;
  addRow: () => void;
  getHighlightedCellIds: (s: Cell) => void;
  isIncludedId: (id: number) => boolean;
  resetHighlightedCells: () => void;
  generateTable: (obj: TableNet) => void;
}

const initialData: ITableContext = {
  cells: [],
  rowNumber: 0,
  colNumber: 0,
  isTableReady: false,
  incrementCellAmountByOne: (id) => {},
  removeRow: (id) => {},
  addRow: () => null,
  getHighlightedCellIds(s) {},
  isIncludedId: (id) => false,
  resetHighlightedCells: () => null,
  generateTable: (obj) => null,
};

const TableContext = createContext<ITableContext>(initialData);

type ReducerState = {
  rowNumber: number;
  colNumber: number;
  highlightedCellIds: number[];
  cells: Cell[];
  isTableReady: boolean;
};

const updateDataReducer = (
  prev: ReducerState,
  next: Partial<ReducerState>
) => ({ ...prev, ...next });

const defaultDataState = {
  rowNumber: 1,
  colNumber: 1,
  highlightedCellIds: [],
  cells: [],
  isTableReady: false,
};

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, updateData] = useReducer(updateDataReducer, defaultDataState);

  const generateTable = ({ cols, rows }: TableNet) => {
    updateData({
      isTableReady: true,
      colNumber: cols,
      rowNumber: rows,
      cells: generateCellsArray(cols * rows),
    });
  };

  const removeRow = (id: number) => {
    const startIndex = data.cells.findIndex((c) => c.id === id);

    const newCells = [
      ...data.cells.slice(0, startIndex),
      ...data.cells.slice(startIndex + data.colNumber),
    ];

    updateData({ cells: newCells, rowNumber: data.rowNumber - 1 });
  };

  const addRow = () => {
    const lastCellId = (data.cells.at(-1)?.id ?? 0) + 1;
    updateData({
      cells: data.cells.concat(
        ...generateCellsArray(data.colNumber, lastCellId)
      ),
      rowNumber: data.rowNumber + 1,
    });
  };

  const incrementCellAmountByOne = (id: Cell["id"]) => {
    const cellsCopy = data.cells.slice().map((cell) => {
      if (cell.id === id) {
        return {
          ...cell,
          amount: cell.amount + 1,
        };
      }
      return cell;
    });

    updateData({ cells: cellsCopy });
  };

  const getHighlightedCellIds = (selected: Cell) => {
    const ids = getClosestAmountCells(data.cells, selected);
    updateData({ highlightedCellIds: ids });
  };

  const resetHighlightedCells = () => updateData({ highlightedCellIds: [] });

  const isIncludedId = (id: Cell["id"]) => data.highlightedCellIds.includes(id);

  const value = {
    cells: data.cells,
    rowNumber: data.rowNumber,
    colNumber: data.colNumber,
    incrementCellAmountByOne,
    removeRow,
    addRow,
    getHighlightedCellIds,
    isIncludedId,
    resetHighlightedCells,
    generateTable,
    isTableReady: data.isTableReady,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableData = () => useContext(TableContext);

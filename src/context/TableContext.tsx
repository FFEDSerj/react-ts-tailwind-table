import { createContext, ReactNode, useContext, useReducer } from "react";
import { generateCellsArray } from "../utils/generateCellsArray";
import { getClosestAmountCells } from "../utils/getClosestAmountCells";
import type { Cell } from "../types";

interface ITableContext {
  cells: Cell[];
  rowNumber: number;
  colNumber: number;
  incrementCellAmountByOne: (id: Cell["id"]) => void;
  removeRow: (id: number) => void;
  addRow: () => void;
  getHighlightedCellIds: (s: Cell) => void;
  isIncludedId: (id: number) => boolean;
  resetHighlightedCells: () => void;
}

const initialData: ITableContext = {
  cells: [],
  rowNumber: 0,
  colNumber: 0,
  incrementCellAmountByOne: (id) => {},
  removeRow: (id) => {},
  addRow: () => null,
  getHighlightedCellIds(s) {},
  isIncludedId: (id) => false,
  resetHighlightedCells: () => null,
};

const TableContext = createContext<ITableContext>(initialData);

type ReducerState = {
  rowNumber: number;
  colNumber: number;
  highlightedCellIds: number[];
  cells: Cell[];
};

const updateDataReducer = (
  prev: ReducerState,
  next: Partial<ReducerState>
) => ({ ...prev, ...next });

const initTableData = (initialState: ReducerState) => {
  return {
    ...initialState,
    cells: generateCellsArray(initialState.colNumber * initialState.rowNumber),
  };
};

const defaultDataState = {
  rowNumber: 11,
  colNumber: 10,
  highlightedCellIds: [],
  cells: [],
};

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, updateData] = useReducer(
    updateDataReducer,
    defaultDataState,
    initTableData
  );

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
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableData = () => useContext(TableContext);

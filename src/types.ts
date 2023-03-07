export type Cell = {
  id: number;
  amount: number;
};

export type Row = { cells: Cell[]; position: number };

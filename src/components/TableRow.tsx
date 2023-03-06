import type { Cell } from "../types";
import { CellAmount } from "./CellAmount";

type TableRowProps = {
  rowCells: Cell[];
  rowPosition: number;
};

export const TableRow = ({ rowCells, rowPosition }: TableRowProps) => {
  const rowSum = rowCells.reduce((sum, val) => sum + val.amount, 0);
  return (
    <tr>
      <td className="border border-slate-600 p-2">Row #{rowPosition}</td>
      {rowCells.map(({ id, amount }) => (
        <CellAmount key={id} amount={amount} />
      ))}
      <td className="border border-slate-600 p-2 dark:bg-gray-300 text-center">{rowSum}</td>
    </tr>
  );
};

import { Cell } from "../types";

type TableRowProps = {
  rowCells: Cell[];
  rowPosition: number;
};

export const TableRow = ({ rowCells, rowPosition }: TableRowProps) => {
  return (
    <tr>
      <td className="border border-slate-600 p-2">Row #{rowPosition}</td>
      {rowCells.map(({ id, amount }) => (
        <td key={id} className="border border-slate-600 text-center">
          {amount}
        </td>
      ))}
    </tr>
  );
};

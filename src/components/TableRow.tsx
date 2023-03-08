import { useState } from "react";
import { RemoveRowButton } from "./RemoveRowButton";
import { TableCell } from "./TableCell";
import type { Cell } from "../types";

type TableRowProps = {
  rowCells: Cell[];
  rowPosition: number;
};

export const TableRow = ({ rowCells, rowPosition }: TableRowProps) => {
  const [isShowPercent, setShowPercent] = useState(false);
  const rowSum = rowCells.reduce((sum, val) => sum + val.amount, 0);

  return (
    <>
      <tr>
        <td className="border border-slate-600 p-2 font-semibold">
          Row #{rowPosition}
        </td>
        {rowCells.map((cell) => (
          <TableCell
            key={cell.id}
            cell={cell}
            rowSum={rowSum}
            isShowPercent={isShowPercent}
          />
        ))}
        <td
          onMouseEnter={() => setShowPercent(true)}
          onMouseLeave={() => setShowPercent(false)}
          className="border border-slate-600 p-2 dark:bg-gray-300 text-center"
        >
          ←{rowSum}
        </td>
        <td className="hover:bg-red-300 border border-slate-600 transition-colors">
          <RemoveRowButton id={rowCells[0].id} />
        </td>
      </tr>
    </>
  );
};

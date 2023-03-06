import { useTableData } from "../context/TableContext";
import type { Cell } from "../types";

type CellAmountProps = {
  cell: Cell;
  rowSum: number;
  isShowPercent: boolean;
};

export const CellAmount = ({
  cell,
  rowSum,
  isShowPercent,
}: CellAmountProps) => {
  const { id, amount } = cell;
  const { incrementCellAmountByOne } = useTableData();

  const percentFromTotal = `${parseFloat(((amount / rowSum) * 100).toFixed(1))}%`;

  return (
    <>
      {!isShowPercent ? (
        <td
          onClick={() => incrementCellAmountByOne(id)}
          className="border hover:bg-slate-200 transition-colors cursor-pointer border-slate-600 text-center"
        >
          {amount}
        </td>
      ) : (
        <td className="border relative border-slate-600 text-center">
          <span
            style={{ height: percentFromTotal }}
            className={`absolute block w-full bottom-0 left-0 bg-gradient-to-t from-zinc-200 to-gray-300`}
          />
          <span className="relative z-10">{percentFromTotal}</span>
        </td>
      )}
    </>
  );
};

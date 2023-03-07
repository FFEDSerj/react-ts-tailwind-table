import { useTableData } from "../context/TableContext";
import type { Cell } from "../types";
import { getClosestValues } from "../utils/getClosestValues";

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
  const {
    incrementCellAmountByOne,
    isIncludedId,
    getHighlightedCellIds,
    resetHighlightedCells,
  } = useTableData();

  const percentFromTotal = `${parseFloat(
    ((amount / rowSum) * 100).toFixed(1)
  )}%`;

  const isHighlighted = isIncludedId(id);

  return (
    <>
      {!isShowPercent ? (
        <td
          onClick={() => incrementCellAmountByOne(id)}
          onMouseEnter={() => getHighlightedCellIds(cell)}
          onMouseLeave={resetHighlightedCells}
          className={`${
            isHighlighted && "bg-cyan-400"
          } border hover:bg-slate-200 transition-colors cursor-pointer border-slate-600 text-center`}
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

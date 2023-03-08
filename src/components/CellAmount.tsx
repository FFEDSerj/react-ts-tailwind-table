import { useTableData } from "../context/TableContext";
import type { Cell } from "../types";

type CellAmountProps = {
  cell: Cell;
};

export const CellAmount = ({ cell }: CellAmountProps) => {
  const { id, amount } = cell;
  const {
    incrementCellAmountByOne,
    getHighlightedCellIds,
    resetHighlightedCells,
    isIncludedId,
  } = useTableData();

  const isHighlighted = isIncludedId(id);

  return (
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
  );
};

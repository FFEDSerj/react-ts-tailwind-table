import { CellAmount } from "./CellAmount";
import { CellPercent } from "./CellPercent";
import type { Cell } from "../types";

type CellProps = {
  cell: Cell;
  rowSum: number;
  isShowPercent: boolean;
};

export const TableCell = ({ cell, rowSum, isShowPercent }: CellProps) => {
  return (
    <>
      {!isShowPercent ? (
        <CellAmount cell={cell} />
      ) : (
        <CellPercent amount={cell.amount} rowSum={rowSum} />
      )}
    </>
  );
};

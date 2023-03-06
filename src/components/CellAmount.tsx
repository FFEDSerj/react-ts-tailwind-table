import { Cell } from "../types";

type CellAmountProps = {
  amount: Cell["amount"];
};

export const CellAmount = ({ amount }: CellAmountProps) => {
  return <td className="border border-slate-600 text-center">{amount}</td>;
};

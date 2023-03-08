type CellPercentProps = {
  amount: number;
  rowSum: number;
};

export const CellPercent = ({ amount, rowSum }: CellPercentProps) => {
  const percentFromTotal = `${parseFloat(
    ((amount / rowSum) * 100).toFixed(1)
  )}%`;

  return (
    <td className="border relative border-slate-600 text-center">
      <span
        style={{ height: percentFromTotal }}
        className={`absolute block w-full bottom-0 left-0 bg-gradient-to-t from-zinc-200 to-gray-300`}
      />
      <span className="relative z-10">{percentFromTotal}</span>
    </td>
  );
};

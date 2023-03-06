type AverageValueProps = {
  value: number;
};

export const AverageValue = ({ value }: AverageValueProps) => {
  return <td className="border bg-gray-300 text-gray-700 border-slate-600 p-2 text-center">{value} ↑</td>;
};

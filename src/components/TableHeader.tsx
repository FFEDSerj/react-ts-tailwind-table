import { generatedNumberArray } from "../utils/generateNumberArray";

type TableHeaderProps = {
  headerNumber: number;
};

export const TableHeader = ({ headerNumber }: TableHeaderProps) => {
  const numArray = generatedNumberArray(headerNumber);
  return (
    <thead>
      <tr>
        <th className="border border-slate-600 p-2"></th>
        {numArray.map((num) => (
          <th key={num} className="border border-slate-600 p-2">
            Col #{num}
          </th>
        ))}
        <th className="border border-slate-600 p-2">Row Sum</th>
      </tr>
    </thead>
  );
};

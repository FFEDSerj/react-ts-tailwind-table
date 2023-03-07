import { useTableData } from "../context/TableContext";
import { generatedNumberArray } from "../utils/generateNumberArray";

export const TableHeader = () => {
  const { colsNumber } = useTableData();
  const numArray = generatedNumberArray(colsNumber);
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
        <th className="border border-slate-600 p-2"></th>
      </tr>
    </thead>
  );
};

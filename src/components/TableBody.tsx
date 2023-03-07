import { useTableData } from "../context/TableContext";
import { calcColsAverageValue } from "../utils/calcColsAverageValue";
import { generatedNumberArray } from "../utils/generateNumberArray";
import { AverageValue } from "./AverageValue";
import { TableRow } from "./TableRow";

export const TableBody = () => {
  const { cells, colNumber, rowNumber, addRow } = useTableData();
  const numberRowArray = generatedNumberArray(rowNumber);
  const numberColArray = generatedNumberArray(colNumber);

  const colAverageValues = calcColsAverageValue(colNumber, rowNumber, cells);

  return (
    <tbody>
      {numberRowArray.map((rowNumber, index) => {
        const slicedItems = cells.slice(
          colNumber * index,
          colNumber * rowNumber
        );
        return (
          <TableRow
            rowPosition={rowNumber}
            rowCells={slicedItems}
            key={rowNumber}
          />
        );
      })}
      <tr>
        <td className="border border-slate-600 p-2 font-medium">
          Average values
        </td>
        {numberColArray.map((val, i) => (
          <AverageValue key={val} value={colAverageValues[i]} />
        ))}
        <td colSpan={2} className="p-2">
          <button
            className="text-gray-900 transition-colors bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 h-full w-full"
            type="button"
            onClick={addRow}
          >
            Add row
          </button>
        </td>
      </tr>
    </tbody>
  );
};

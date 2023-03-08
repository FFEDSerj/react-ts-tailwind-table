import { useTableData } from "../context/TableContext";
import { calcColsAverageValue } from "../utils/calcColsAverageValue";
import { generatedNumberArray } from "../utils/generateNumberArray";
import { AddRowButton } from "./AddRowButton";
import { AverageValue } from "./AverageValue";
import { TableRow } from "./TableRow";

export const TableBody = () => {
  const { cells, colNumber, rowNumber } = useTableData();
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
          <AddRowButton />
        </td>
      </tr>
    </tbody>
  );
};

import { useTableData } from "../context/TableContext";
import { calcColsAverageValue } from "../utils/calcColsAverageValue";
import { generatedNumberArray } from "../utils/generateNumberArray";
import { AverageValue } from "./AverageValue";
import { TableRow } from "./TableRow";

export const TableBody = () => {
  const { cells, colsNumber, rowsNumber } = useTableData();
  const numberRowArray = generatedNumberArray(rowsNumber);
  const numberColArray = generatedNumberArray(colsNumber);

  const colAverageValues = calcColsAverageValue(colsNumber, rowsNumber, cells);

  return (
    <tbody>
      {numberRowArray.map((rowNumber, index) => {
        const slicedItems = cells.slice(
          colsNumber * index,
          colsNumber * rowNumber
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
      </tr>
    </tbody>
  );
};

import { useTableData } from "../context/TableContext";
import type { Cell } from "../types";
import { calcColsAverageValue } from "../utils/calcColsAverageValue";
import { generatedNumberArray } from "../utils/generateNumberArray";
import { AverageValue } from "./AverageValue";
import { TableRow } from "./TableRow";

export const TableBody = () => {
  const { cells, colsNumber, rowsNumber } = useTableData();
  const averageValuesCells = generatedNumberArray(colsNumber);
  const colAverageValues = calcColsAverageValue(colsNumber, cells);

  const cellsByRowNumber: Cell[][] = [];

  for (let i = 0; i < rowsNumber; i++) {
    const slicedCells = cells.slice(i * rowsNumber, rowsNumber * (i + 1));
    cellsByRowNumber.push(slicedCells);
  }

  return (
    <tbody>
      {cellsByRowNumber.map((cellList, i) => (
        <TableRow key={i + 1} rowCells={cellList} rowPosition={i + 1} />
      ))}
      <tr>
        <td className="border border-slate-600 p-2 font-medium">
          Average values
        </td>
        {averageValuesCells.map((val, i) => (
          <AverageValue key={val} value={colAverageValues[i]} />
        ))}
      </tr>
    </tbody>
  );
};

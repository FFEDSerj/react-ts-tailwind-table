import type { Cell } from "../types";
import { calcColsAverageValue } from "../utils/calcColsAverageValue";
import { generatedNumberArray } from "../utils/generateNumberArray";
import { AverageValue } from "./AverageValue";
import { TableRow } from "./TableRow";

type TableBodyProps = {
  cells: Cell[];
  rowLength: number;
  colLength: number;
};

export const TableBody = ({ cells, rowLength, colLength }: TableBodyProps) => {
  const averageValuesCells = generatedNumberArray(colLength);
  const colAverageValues = calcColsAverageValue(colLength, cells);
  
  const cellsByRowNumber: Cell[][] = [];

  for (let i = 0; i < rowLength; i++) {
    const slicedCells = cells.slice(i * rowLength, rowLength * (i + 1));
    cellsByRowNumber.push(slicedCells);
  }

  return (
    <tbody>
      {cellsByRowNumber.map((cellList, i) => (
        <TableRow key={i + 1} rowCells={cellList} rowPosition={i + 1} />
      ))}
      <tr>
        <td className="border border-slate-600 p-2">Average values</td>
        {averageValuesCells.map((val, i) => (
          <AverageValue key={val} value={colAverageValues[i]} />
        ))}
      </tr>
    </tbody>
  );
};

import { Cell } from "../types";
import { TableRow } from "./TableRow";

type TableBodyProps = {
  cells: Cell[];
  rowLength: number;
};

export const TableBody = ({ cells, rowLength }: TableBodyProps) => {
  const slicedByColsNumber: Cell[][] = [];
  for (let i = 0; i < rowLength; i++) {
    const slicedCells = cells.slice(i * rowLength, rowLength * (i + 1));
    slicedByColsNumber.push(slicedCells);
  }

  console.log(slicedByColsNumber);
  return (
    <tbody>
      {slicedByColsNumber.map((cellList, i) => (
        <TableRow key={i + 1} rowCells={cellList} rowPosition={i + 1} />
      ))}
    </tbody>
  );
};

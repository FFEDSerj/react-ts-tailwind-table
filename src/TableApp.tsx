import { TableBody } from "./components/TableBody";
import { TableHeader } from "./components/TableHeader";
import { Cell } from "./types";
import { randomNumber } from "./utils/randomNumber";

function TableApp() {
  const ROWS = 10; // For now
  const COLS = 10; // For now

  const initialCells: Cell[] = Array.from({ length: ROWS * COLS }, (_, i) => ({
    id: i + 1,
    amount: randomNumber(),
  }));

  return (
    <main className="mx-auto p-10">
      <h1 className="font-mono font-semibold text-3xl">Hi!</h1>
      <table className="table-fixed border-collapse border border-slate-500 ">
        <TableHeader headerNumber={COLS} />
        <TableBody cells={initialCells} rowLength={ROWS}/>
      </table>
    </main>
  );
}

export default TableApp;

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
        <thead>
          <tr>
            <th className="border border-slate-600 p-2">Song</th>
            <th className="border border-slate-600 p-2">Artist</th>
            <th className="border border-slate-600 p-2">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 p-2">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="border border-slate-600 p-2">Malcolm Lockyer</td>
            <td className="border border-slate-600 p-2">1961</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Witchy Woman</td>
            <td className="border border-slate-600 p-2">The Eagles</td>
            <td className="border border-slate-600 p-2">1972</td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-2">Shining Star</td>
            <td className="border border-slate-600 p-2">Earth, Wind, and Fire</td>
            <td className="border border-slate-600 p-2">1975</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default TableApp;

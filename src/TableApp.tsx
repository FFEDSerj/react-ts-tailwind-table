import { TableBody } from "./components/TableBody";
import { TableHeader } from "./components/TableHeader";
import { TableContextProvider } from "./context/TableContext";

function TableApp() {
  return (
    <TableContextProvider>
      <main className="mx-auto p-10">
        <h1 className="font-semibold text-3xl">Hi!</h1>
        <table className="font-mono table-fixed border-collapse border border-slate-500 ">
          <TableHeader />
          <TableBody />
        </table>
      </main>
    </TableContextProvider>
  );
}

export default TableApp;

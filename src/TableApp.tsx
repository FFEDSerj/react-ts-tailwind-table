import { TableContextProvider } from "./context/TableContext";
import { Table } from "./components/Table";

function TableApp() {
  return (
    <TableContextProvider>
      <main className="mx-auto p-10">
        <h1 className="font-semibold text-3xl">Hi!</h1>
        <Table />
      </main>
    </TableContextProvider>
  );
}

export default TableApp;

import { TableContextProvider, useTableData } from "./context/TableContext";
import { Table } from "./components/Table";
import { Form } from "./components/form/Form";

function TableApp() {
  return (
    <TableContextProvider>
      <main className="mx-auto p-10">
        <Form />
        <Table />
      </main>
    </TableContextProvider>
  );
}

export default TableApp;

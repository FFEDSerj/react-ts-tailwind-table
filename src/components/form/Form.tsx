import { useTableData } from "../../context/TableContext";
import { FormEvent, useState } from "react";

export const Form = () => {
  const { generateTable, isTableReady } = useTableData();
  const [cols, setCols] = useState(1);
  const [rows, setRows] = useState(1);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateTable({ cols, rows });
  };
  return (
    <>
      {!isTableReady ? (
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={onSubmit}
            name="table-from"
            className="p-3 grid gap-4 grid-rows-1 grid-cols-4"
          >
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="rows"
              >
                Number of rows
              </label>
              <input
                value={rows}
                onChange={(e) => setRows(e.target.valueAsNumber)}
                className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="rows"
                min={1}
                max={20}
                type="number"
              />
            </div>
            <div className="col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cols"
              >
                Number of columns
              </label>
              <input
                value={cols}
                onChange={(e) => setCols(e.target.valueAsNumber)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                id="cols"
                min={1}
                max={20}
                type="number"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2 col-start-2"
              type="submit"
            >
              Generate table
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

import { useTableData } from "../context/TableContext";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
  const { isTableReady } = useTableData();
  return (
    <>
      {isTableReady ? (
        <div className="grid place-items-center overflow-x-scroll">
          <table className="font-mono table-fixed border-collapse border border-slate-500 overflow-y-scroll">
            <TableHeader />
            <TableBody />
          </table>
        </div>
      ) : null}
    </>
  );
};

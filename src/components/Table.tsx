import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
  return (
    <table className="font-mono table-fixed border-collapse border border-slate-500 ">
      <TableHeader />
      <TableBody />
    </table>
  );
};

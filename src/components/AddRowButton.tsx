import { useTableData } from "../context/TableContext";

export const AddRowButton = () => {
  const { addRow } = useTableData();
  return (
    <button
      className="text-gray-900 transition-colors bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 h-full w-full"
      type="button"
      onClick={addRow}
    >
      Add row
    </button>
  );
};

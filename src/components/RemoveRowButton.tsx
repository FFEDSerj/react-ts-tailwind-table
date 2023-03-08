import { useTableData } from "../context/TableContext";

type RemoveRowButtonProps = {
  id: number;
};

export const RemoveRowButton = ({ id }: RemoveRowButtonProps) => {
  const { removeRow } = useTableData();
  return (
    <button
      onClick={() => removeRow(id)}
      className="text-sm p-2 font-medium"
      type="button"
    >
      Remove
    </button>
  );
};

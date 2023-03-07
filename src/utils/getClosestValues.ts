import type { Cell } from "./../types";

export const getClosestValues = (
  items: Cell[],
  selected: Cell,
  desiredLength: number = 5
) => {
  const filtered = items.filter((c) => c.id !== selected.id);

  const closestCellIds: Cell["id"][] = [];

  while (closestCellIds.length < desiredLength) {
    const closest = filtered.reduce((acc, cell) =>
      Math.abs(cell.amount - selected.amount) <
      Math.abs(acc.amount - selected.amount)
        ? cell
        : acc
    );

    const closestIdx = filtered.findIndex((c) => c.id === closest.id);
    const id = filtered.splice(closestIdx, 1)[0].id;
    closestCellIds.push(id);
  }

  return closestCellIds;
};

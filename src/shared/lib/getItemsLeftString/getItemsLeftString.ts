export const getItemsLeftString = (array: unknown[]) => {
  const count = array.length;

  switch (count) {
    case 0:
      return "Create new task";
    case 1:
      return `${count} item left`;
    default:
      return `${count} items left`;
  }
};

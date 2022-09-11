export const truncate = (text: string, lenght: number) => {
  return text.length > lenght ? text.slice(0, lenght - 1) + "..." : text;
};

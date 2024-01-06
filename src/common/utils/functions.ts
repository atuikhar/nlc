export const getInitials = (name: string) => {
  const first = name.split(' ')[0].charAt(0);
  const second = name.split(' ')[1].charAt(0);
  return `${first}${second}`;
};

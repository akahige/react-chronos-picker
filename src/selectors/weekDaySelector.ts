const weekDaySelector = (name: string, index: number) => (props: any) => {
  const { weekend } = props;
  const isWeekend = weekend.includes(index);

  return { name, isWeekend };
};

export default weekDaySelector;

declare type MonthProps = {
  weeks: string[][];
  days: string[];
  weekend: number[];
  date: Chronos;
  events: DayEvent[];
  selected: string[];
  onDateChange: (date: string[]) => void;
  minMax: string[];
};

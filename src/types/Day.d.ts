declare type DayProps = {
  day: string;
  date: Chronos;
  events: DateEvent[];
  isWeekend: boolean;
  selected: string[];
  handleSelect: (dates: string[]) => void;
  isDateRange: boolean;
  setHovered: (date: string) => void;
  hovered: string;
  minMax: string[];
};

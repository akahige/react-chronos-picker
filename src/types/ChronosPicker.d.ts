declare type ChronosPickerProps = {
  weekend: number[];
  events: DayEvent[];
  date: string[];
  format: string;
  theme: string;
  onDateChange: (date: string[]) => void;
  minMax: [string, string];
};

declare type DateEvent = {
  date: string; // assuming the date string is in "YYYY-MM-DD" format
  color: string;
  [key: string]: any;
  // Add other properties as needed
};

declare type ChronosPickerConfigProps = {
  weekend: number[];
  events: DayEvent[];
  format: string;
  monthFormat?: string;
  weekDayFormat?: string;
  minMax: string[];
  dayElement?: ReactNode;
  dayNameElement?: ReactNode;
  weekStart?: number;
  [key: string]: any;
};

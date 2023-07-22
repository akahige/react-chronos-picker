declare type ReactChronosProps = {
  weekend: number[];
  date?: string[];
  format: string;
  theme: string;
  monthFormat?: string;
  weekDayFormat?: string;
  onDateChange: (date: string[]) => void;
  minMax?: string[];
  dayElement?: ReactNode;
  dayNameElement?: ReactNode;
  headerElement?: ReactNode;
  isDateRange?: boolean;
  weekStart?: number;
  [key: string]: any;
};

declare type GetYearsList = (min: Chronos, max: Chronos) => Chronos[];

declare type GetMonthsList = (
  date: Chronos,
  min: Chronos,
  max: Chronos
) => Chronos[];

type CalculateEventDetailsReturn = {
  isStartDay: boolean;
  isEndDay: boolean;
  inRange: boolean;
  isHovered: boolean;
};

declare type CalculateValues = (
  day: string,
  lpDay: Chronos,
  format: string,
  selected: string[],
  hovered: string,
  isDateRange: boolean
) => CalculateEventDetailsReturn;

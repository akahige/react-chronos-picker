declare type GetYearsList = (min: Chronos, max: Chronos) => Chronos[];

declare type GetMonthsList = (
  date: Chronos,
  min: Chronos,
  max: Chronos
) => Chronos[];

type CalculateEventDetailsReturn = {
  lpDay: Chronos;
  isStartDay: boolean;
  isEndDay: boolean;
  inRange: boolean;
  isHovered: boolean;
  filtredEvents: DateEvent[];
  isEnabled: boolean;
};

declare type CalculateEventDetails = (
  day: string,
  events: DateEvent[],
  selected: string[],
  hovered: string,
  isDateRange: boolean,
  minMax: string[]
) => CalculateEventDetailsReturn;

import Chronos, { isBetween, add } from "@asidd/chronos";

export const getYearsList: GetYearsList = (min, max) => {
  const startYear = Number(min.format("YYYY"));
  const endYear = Number(max.format("YYYY"));

  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(new Chronos(year.toString(), "YYYY"));
  }

  return years;
};

export const getMonthsList: GetMonthsList = (date, min, max) => {
  const newDate = new Chronos(date.format("YYYY"), "YYYY");
  const months = [];

  for (let month = 0; month < 12; month++) {
    if (isBetween(newDate, min, max, "months", true)) {
      months.push(new Chronos(newDate));
    }
    add(newDate, 1, "months");
  }

  return months;
};

// Helper function to calculate event details
export const calculateEventDetails: CalculateEventDetails = (
  day,
  events,
  selected,
  hovered,
  isDateRange,
  minMax
) => {
  const lpDay = new Chronos(day, "YYYY-MM-DD");
  const selectedStart = new Chronos(selected[0], "YYYY-MM-DD");
  const selectedEnd = new Chronos(selected[selected.length - 1], "YYYY-MM-DD");
  const hovredDate = new Chronos(hovered, "YYYY-MM-DD");
  const min = new Chronos(minMax[0], "YYYY-MM-DD");
  const max = new Chronos(minMax[1], "YYYY-MM-DD");

  const isStartDay = selected[0] === day;
  const isEndDay =
    (selected[selected.length - 1] === day && selected.length === 2) ||
    (selected[selected.length - 1] === day && !isDateRange);

  const inRange = isBetween(lpDay, selectedStart, selectedEnd, "days");
  const isHovered =
    isDateRange && isBetween(lpDay, selectedStart, hovredDate, "days");

  const filtredEvents = events.filter((e) => e.date === day);

  const isEnabled = isBetween(lpDay, min, max, "days", true);

  return {
    lpDay,
    isStartDay,
    isEndDay,
    inRange,
    isHovered,
    filtredEvents,
    isEnabled,
  };
};

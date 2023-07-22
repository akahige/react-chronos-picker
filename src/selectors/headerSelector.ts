import Chronos, { add, isBetween, subtract } from "@asidd/chronos";
import useDispatch from "../hooks/useDispatch";

const headerSelector = () => (state: any, props: any) => {
  const { chronos } = state;

  const { minMax, format } = props;
  const dispatch = useDispatch();

  const newDate = chronos.format("YYYY-MM");
  const min = new Chronos(
    new Chronos(minMax[0], format).format("YYYY-MM"),
    "YYYY-MM"
  );
  const max = new Chronos(
    new Chronos(minMax[1], format).format("YYYY-MM"),
    "YYYY-MM"
  );

  const nextDate = add(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const previousDate = subtract(new Chronos(newDate, "YYYY-MM"), 1, "months");
  const isPreviousEnabled = isBetween(previousDate, min, max, "months", true);
  const isNextEnabled = isBetween(nextDate, min, max, "months", true);

  const handleNext = () => {
    if (isNextEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: nextDate });
    }
  };

  const handlePrevious = () => {
    if (isPreviousEnabled) {
      dispatch({ type: "SET_CHRONOS", payload: previousDate });
    }
  };

  const navigateToMonth = (newDate: Chronos) => {
    dispatch({ type: "SET_CHRONOS", payload: newDate });
  };

  return {
    handleNext,
    handlePrevious,
    isPreviousEnabled,
    isNextEnabled,
    chronos,
    navigateToMonth,
  };
};

export default headerSelector;

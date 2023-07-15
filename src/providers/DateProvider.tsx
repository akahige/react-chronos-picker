import { useReducer, useEffect } from "react";
import { GlobalContext, DispatchContext } from "../contexts";
import useProps from "../hooks/useProps";
import Chronos from "@asidd/chronos";
import dateReducer from "../helpers/dateReducer";

function DateProvider({
  children,
  date,
  isDateRange,
  onDateChange,
}: DateProviderProps) {
  const { format } = useProps();
  const initialState = {
    chronos: new Chronos(date[0], format),
    date,
    isDateRange: isDateRange || date.length === 2, // active: date.map((d) => new Chronos(d, format)),
    selected: date,
    hovered: new Chronos(date[0], format),
    isDone: false,
  };

  const [state, dispatch] = useReducer(dateReducer, initialState);

  useEffect(() => {
    if (onDateChange && state.isDone) {
      onDateChange(state.selected);
    }
  }, [state, onDateChange]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
    </DispatchContext.Provider>
  );
}

export default DateProvider;

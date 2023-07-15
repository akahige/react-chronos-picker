import { useReducer, useEffect } from "react";
import { GlobalContext, DispatchContext } from "../contexts";
import useProps from "../hooks/useProps";
import Chronos from "@asidd/chronos";
import dateReducer from "../helpers/dateReducer";
import { DateActionType } from "../helpers/actionType";

const initialState = {
  date: [new Chronos().format("YYYY-MM-DD")],
  chronos: new Chronos(),
  hovered: new Chronos(),
  selected: [],
};

function DateProvider({ children, date, isDateRange }: DateProviderProps) {
  const [state, dispatch] = useReducer(dateReducer, initialState);
  const { format } = useProps();

  useEffect(() => {
    dispatch({
      type: DateActionType.INIT,
      payload: {
        chronos: new Chronos(date[0], format),
        date,
        isDateRange: isDateRange || date.length === 2, // active: date.map((d) => new Chronos(d, format)),
        selected: date,
        hovered: new Chronos(date[0], format),
      },
    });
  }, [date, format, isDateRange]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
    </DispatchContext.Provider>
  );
}

export default DateProvider;

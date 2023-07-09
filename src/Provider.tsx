import Chronos from "@asidd/chronos";
import {
  useContext,
  ReactElement,
  createContext,
  memo,
  useReducer,
  useEffect,
} from "react";

export const GlobalContext = createContext(null);

export const SliceContext = createContext(null);

export const ConstantsContext = createContext<any | null>(null);
export const DispatchContext = createContext<any | null>(null);

const MemorizedProvider = memo(
  ({ children, value }: MemorizedProviderProps): ReactElement => {
    return (
      <SliceContext.Provider value={value}>{children}</SliceContext.Provider>
    );
  }
);

export const SliceProvider = ({
  children,
  selector,
}: SliceProviderProps): ReactElement => {
  const state = useContext(SliceContext);

  return (
    <MemorizedProvider value={selector(state)}>{children}</MemorizedProvider>
  );
};

function DateProvider({ children, newState, date }: DateProviderProps) {
  const [state, dispatch] = useReducer(dateReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "INIT",
      payload: {
        chronos: new Chronos(date[0], newState.format),
        date,
        active: date.map((d) => new Chronos(d, newState.format)),
        selected: date,
        hovered: new Chronos(date[0], newState.format),
      },
    });
  }, [date, newState]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <ConstantsContext.Provider value={newState}>
        <GlobalContext.Provider value={state}>
          {children}
        </GlobalContext.Provider>
      </ConstantsContext.Provider>
    </DispatchContext.Provider>
  );
}

function dateReducer(state, { type, payload }) {
  switch (type) {
    case "INIT": {
      return {
        ...state,
        ...payload,
      };
    }
    case "SET_CHRONOS": {
      return {
        ...state,
        chronos: payload,
      };
    }
    case "SET_SELECTED": {
      return {
        ...state,
        selected: payload,
      };
    }
    case "SET_HOVERED": {
      return {
        ...state,
        hovered: payload,
      };
    }

    default: {
      throw Error("Unknown action: " + type);
    }
  }
}

const initialState = {
  events: [],
  date: [new Chronos().format("YYYY-MM-DD")],
  chronos: new Chronos(),
  hovered: new Chronos(),
  selected: [],
};

export default DateProvider;

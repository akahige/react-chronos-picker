import Chronos, { isBetween } from "@asidd/chronos";
import { DateActionType } from "./actionType";

function dateReducer(state: DateState, action: DateAction): DateState {
  switch (action.type) {
    case DateActionType.INIT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case DateActionType.SET_CHRONOS: {
      return {
        ...state,
        chronos: action.payload,
      };
    }
    case DateActionType.HANDLE_CLICK: {
      const { day, format, onDateChange } = action.payload;
      const start = new Chronos(state.selected[0], format);
      const hDate = new Chronos(state.hovered, format);
      const isInBetween = isBetween(hDate, start, hDate, "days", true);
      const isDateRange = state.isDateRange;
      if (isDateRange) {
        if (state.selected.length === 2 || state.selected.length === 0) {
          return { ...state, selected: [day], hovered: day };
        } else {
          if (state.selected.length === 1 && isInBetween) {
            onDateChange([state.selected[0], day]);
            return { ...state, selected: [state.selected[0], day] };
          } else {
            return { ...state, selected: [day], hovered: day };
          }
        }
      } else {
        onDateChange([day]);
        return { ...state, selected: [day] };
      }
    }

    case DateActionType.HANDLE_HOVER: {
      const { day } = action.payload;
      if (state.isDateRange && state.selected.length === 1) {
        return { ...state, hovered: day };
      }
      return state;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default dateReducer;

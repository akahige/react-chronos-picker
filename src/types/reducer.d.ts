enum DateActionType {
  INIT = "INIT",
  SET_CHRONOS = "SET_CHRONOS",
  HANDLE_CLICK = "HANDLE_CLICK",
  HANDLE_HOVER = "HANDLE_HOVER",
}

declare type DateAction =
  | {
      type: DateActionType.INIT;
      payload: Partial<DateState>;
    }
  | {
      type: DateActionType.SET_CHRONOS;
      payload: Chronos;
    }
  | {
      type: DateActionType.HANDLE_CLICK;
      payload: {
        day: string;
        format: string;
        onDateChange: (date: string[]) => void;
      };
    }
  | {
      type: DateActionType.HANDLE_HOVER;
      payload: { day: string };
    };

declare interface DateState {
  date: string[];
  chronos: Chronos;
  hovered: Chronos;
  selected: string[];
  isDateRange?: boolean;
}

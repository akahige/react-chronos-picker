declare type HeaderProps = {
  date: Chronos;
  setChronos: (newDate: Chronos) => void;
  minMax: [string, string];
};

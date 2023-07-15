declare type SliceProviderProps = {
  children: ReactNode;
  selector: (state: any, props: any) => any; // Replace 'any' with the actual state type
};

declare type SlicePropsProviderProps = {
  children: ReactNode;
  selector: (props: any) => any; // Replace 'any' with the actual state type
};

declare type PropsProviderProps = {
  children: ReactNode;
  value: any; // Replace 'any' with the actual state slice type
};

declare type MemorizedProviderProps = {
  children: ReactNode;
  value: any; // Replace 'any' with the actual state slice type
};

declare type DateProviderProps = {
  children: ReactNode;
  date: string[];
  isDateRange?: boolean;
  onDateChange?: (date: string[]) => void;
};

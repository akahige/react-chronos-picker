declare type SliceProviderProps = {
  children: ReactNode;
  selector: (state: any) => any; // Replace 'any' with the actual state type
};

declare type MemorizedProviderProps = {
  children: ReactNode;
  value: any; // Replace 'any' with the actual state slice type
};

declare type DateProviderProps = {
  children: ReactNode;
  newState: any; // Replace 'any' with the actual state slice type
  date: string[];
};
declare type MySliceContext = Context<any>; // Replace 'any' with the actual state type
declare type GlobalContext = Context<any>; // Replace 'any' with the actual state type
declare type ConstantsContext = Context<any | null>; // Replace 'any' with the action type

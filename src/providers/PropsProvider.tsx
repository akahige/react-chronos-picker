import { ConstantsContext } from "../contexts";

export function PropsProvider({ children, value }: PropsProviderProps) {
  return (
    <ConstantsContext.Provider value={value}>
      {children}
    </ConstantsContext.Provider>
  );
}

export default PropsProvider;

import { ConstantsContext } from "../contexts";

function PropsProvider({ children, value }: PropsProviderProps) {
  return (
    <ConstantsContext.Provider value={value}>
      {children}
    </ConstantsContext.Provider>
  );
}

export default PropsProvider;

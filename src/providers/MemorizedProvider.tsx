import { memo } from "react";
import { SliceContext } from "../contexts";

const MemorizedProvider = memo(
  ({ children, ...value }: MemorizedProviderProps) => (
    <SliceContext.Provider value={value}>{children}</SliceContext.Provider>
  )
);

export default MemorizedProvider;

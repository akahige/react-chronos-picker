import { useContext } from "react";
import { GlobalContext, ConstantsContext } from "../contexts";
import MemorizedProvider from "./MemorizedProvider";

export const SliceProvider = ({ children, selector }: SliceProviderProps) => {
  const state = useContext(GlobalContext);
  const props = useContext(ConstantsContext);

  return (
    <MemorizedProvider {...selector(state, props)}>
      {children}
    </MemorizedProvider>
  );
};

export default SliceProvider;

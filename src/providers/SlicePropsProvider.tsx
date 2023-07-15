import { useContext } from "react";
import { ConstantsContext } from "../contexts";
import MemorizedProvider from "./MemorizedProvider";

export const SlicePropsProvider = ({
  children,
  selector,
}: SlicePropsProviderProps) => {
  const props = useContext(ConstantsContext);

  return <MemorizedProvider {...selector(props)}>{children}</MemorizedProvider>;
};

export default SlicePropsProvider;

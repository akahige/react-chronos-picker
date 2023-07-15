import { useContext } from "react";
import { SliceContext } from "../contexts";

const useLocaleContext = () => {
  const state = useContext(SliceContext);

  return state;
};

export default useLocaleContext;

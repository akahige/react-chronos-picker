import { useContext } from "react";
import { DispatchContext } from "../Provider";

const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  return dispatch;
};

export default useDispatch;

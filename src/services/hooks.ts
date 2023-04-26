import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from "react-redux";
import { AppDispatch, RootState } from "./types";

export const useDispatchApp = () => dispatchHook<AppDispatch>();
export const useSelectorApp: TypedUseSelectorHook<RootState> = selectorHook;

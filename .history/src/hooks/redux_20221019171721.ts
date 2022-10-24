import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/reducers/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

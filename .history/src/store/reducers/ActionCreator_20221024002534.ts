import axios from "axios";
import { apiUrl } from "../../api/api";
import { IRate } from "../models/IRates";
import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";

export const fetchRates = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ratesSlice.actions.ratesFetching());

    const response = await axios.get<IRate[]>(apiUrl);

    const result = response.data;
    dispatch(ratesSlice.actions.ratesFetchingSuccess(result));
    console.log(result);
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};

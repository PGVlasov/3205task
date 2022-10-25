import axios from "axios";
import { apiUrl } from "../../api/api";
import { Rates } from "../models/Rates";
import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";

export const fetchRates = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ratesSlice.actions.ratesFetching());

    const { data: axiosData } = await axios.get<{ data: Rates }>(apiUrl);
    console.log("111>>>>>>", axiosData);
    console.log("+++++>>>>>>", axiosData.data);
    dispatch(ratesSlice.actions.ratesFetchingSuccess(axiosData.data));
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};

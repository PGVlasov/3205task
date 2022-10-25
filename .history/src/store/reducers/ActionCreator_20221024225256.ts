import axios from "axios";
import { apiUrl } from "../../api/api";
import { Rates } from "../models/Rates";

import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";

export const fetchRates = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ratesSlice.actions.ratesFetching());

    const { data: axiosData } = await axios.get<{ data: Rates }>(apiUrl);
    console.log("111111>>>>>>", axiosData.data);
    console.log("+++++>>>>>>", axiosData.data.x);
    dispatch(ratesSlice.actions.ratesFetchingSuccess(axiosData.data));
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};
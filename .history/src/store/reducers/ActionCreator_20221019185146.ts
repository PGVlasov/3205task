import axios from "axios";
import { IRate } from "../models/IRates";
import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";

export const fetchRates = () => async (dispatch: AppDispatch) => {
  try {
    const apiUrl =
      //"https://jsonplaceholder.typicode.com/users";
      "https://currate.ru/api/?get=currency_list&key=7ddb7a09e687951c3b52d822be1a2b0e";

    dispatch(ratesSlice.actions.ratesFetching());

    const response = await axios.get<IRate[]>(apiUrl);
    dispatch(ratesSlice.actions.ratesFetchingSuccess(response.data));
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};

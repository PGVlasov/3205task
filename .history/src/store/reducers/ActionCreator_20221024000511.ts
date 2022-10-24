import axios from "axios";
import { apiKey } from "../../api/api";
import { IRate } from "../models/IRates";
import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";

export const fetchRates = () => async (dispatch: AppDispatch) => {
  const language = window.navigator.language;

  let currencyRequest = "";
  language === "en"
    ? (currencyRequest = "RUBUSD,RUBEUR")
    : (currencyRequest = "USDRUB,EURRUB");
  if (language === "en") {
    currencyRequest = "";
  }

  try {
    const apiUrl = `https://shrouded-tundra-02503.herokuapp.com/https://currate.ru/api/?get=rates&pairs=${
      (RUBUSD, USDRUB, RUBEUR, EURRUB)
    }&key=${apiKey}`;

    dispatch(ratesSlice.actions.ratesFetching());

    const response = await axios.get<IRate[]>(apiUrl);
    const result = Object.values(response.data);
    dispatch(ratesSlice.actions.ratesFetchingSuccess(result));
    console.log(result);
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};

import { ratesSlice } from "./RatesSlice";
import { AppDispatch } from "./store";
import * as api from "../../api/api";

const lang = window.navigator.language;

function getCurrencyPairs(language: string): [string, string][] {
  const lang = language.slice(0, 2);

  switch (lang) {
    case "ru":
      return [
        ["USD", "RUB"],
        ["EUR", "RUB"],
      ];
    default: // en is default
      return [
        ["RUB", "USD"],
        ["RUB", "EUR"],
      ];
  }
}

export const fetchRates = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ratesSlice.actions.ratesFetching());

    const ratePairs = getCurrencyPairs(lang);
    const rates = await api.fetchRates(ratePairs);

    dispatch(ratesSlice.actions.ratesFetchingSuccess(rates));
  } catch (e) {
    dispatch(ratesSlice.actions.ratesFetchingError("error"));
  }
};

import axios from "axios";
import { Rates } from "../store/models/Rates";

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchRate = async (sourceCurr: string, targetCurr: string) => {
  const rates = await fetchRates([[sourceCurr, targetCurr]]);
  const key = `${sourceCurr}${targetCurr}`;

  return rates[key];
};

/**
 * @param ratePairs example [[RUB, USD], [RUB, EUR]]
 */
export const fetchRates = async (ratePairs: [string, string][]) => {
  const ratesQuery = ratePairs.reduce((acc, curr, i) => {
    const [sourceCurrency, targetCurrency] = curr;
    return `${acc},${sourceCurrency}${targetCurrency}`;
  }, "");

  const { data: axiosData } = await axios.get<{ data: Rates }>(
    `https://shrouded-tundra-02503.herokuapp.com/https://currate.ru/api/?get=rates&pairs=${ratesQuery}&key=${apiKey}`
  );
  return axiosData.data;
};

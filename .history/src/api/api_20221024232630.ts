import axios from "axios";
import { compileFunction } from "vm";
import { Rates } from "../store/models/Rates";

const apiKey = process.env.REACT_APP_API_KEY;

const lang = window.navigator.language;

const ratePairs = getCurrencyPairs(lang);

export const apiUrl = `https://shrouded-tundra-02503.herokuapp.com/https://currate.ru/api/?get=rates&pairs=${ratePairs}&key=${apiKey}`;

function getCurrencyPairs(language: string) {
  const lang = language.slice(0, 2);

  switch (lang) {
    case "ru":
      return "USDRUB,EURRUB";
    default: // en is default
      return "RUBUSD,RUBEUR";
  }
}

export const fetchRate = async (sourceCurr: string, targetCurr: string) => {
  const pair = `${sourceCurr}${targetCurr}`;
  const { data: axiosData } = await axios.get<{ data: Rates }>(
    `https://shrouded-tundra-02503.herokuapp.com/https://currate.ru/api/?get=rates&pairs=${pair}&key=${apiKey}`
  );
  console.log("++++++>>>>>>", Object.values(axiosData.data)[0]);
  return Object.values(axiosData.data)[0];
};

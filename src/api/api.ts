const language = window.navigator.language;
let currencyRequest = "";
language === "en"
  ? (currencyRequest = "RUBUSD,RUBEUR")
  : (currencyRequest = "USDRUB,EURRUB");

const apiKey = "7ddb7a09e687951c3b52d822be1a2b0e";

export const apiUrl = `https://shrouded-tundra-02503.herokuapp.com/https://currate.ru/api/?get=rates&pairs=${currencyRequest}&key=${apiKey}`;

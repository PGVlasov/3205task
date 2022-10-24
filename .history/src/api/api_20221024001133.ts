const language = window.navigator.language;
let currencyRequest = "";
language === "en"
  ? (currencyRequest = "RUBUSD,RUBEUR")
  : (currencyRequest = "USDRUB,EURRUB");

export const apiKey = "7ddb7a09e687951c3b52d822be1a2b0e";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { fetchRates } from "../store/reducers/ActionCreator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { MainPage } from "../pages/mainPage/mainPage";
import { ExchangePage } from "../pages/exchangePage/exchangePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/exchangePage" element={<ExchangePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

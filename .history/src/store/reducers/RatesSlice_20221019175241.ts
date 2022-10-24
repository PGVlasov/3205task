import { IRate } from "../models/IRates";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatesState {
  rates: IRate[];
  isLoading: boolean;
  error: string;
}

const initialState: RatesState = {
  rates: [],
  isLoading: false,
  error: "",
};

export const ratesSlice = createSlice({
  name: "rates", //user
  initialState,
  reducers: {},
});

export default ratesSlice.reducer;

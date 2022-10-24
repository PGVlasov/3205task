import { IRate } from "../models/IRates";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RatesState {
  rates: IRate[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: RatesState = {
  rates: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const ratesSlice = createSlice({
  name: "rates", //user
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {},
  },
});

export default ratesSlice.reducer;

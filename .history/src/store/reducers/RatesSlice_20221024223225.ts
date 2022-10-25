import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rates } from "../models/Rates";

interface RatesState {
  rates: null | Rates;
  isLoading: boolean;
  error: string;
}

const initialState: RatesState = {
  rates: null,
  isLoading: false,
  error: "",
};

export const ratesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    ratesFetching(state) {
      state.isLoading = true;
    },
    ratesFetchingSuccess(state, action: PayloadAction<Rates>) {
      state.isLoading = false;
      state.error = "";
      state.rates = action.payload;
    },
    ratesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default ratesSlice.reducer;

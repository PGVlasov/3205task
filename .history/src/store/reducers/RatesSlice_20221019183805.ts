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
  reducers: {
    ratesFetching(state) {
      state.isLoading = true;
    },
    ratesFetchingSuccess(state, action: PayloadAction<IRate[]>) {
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

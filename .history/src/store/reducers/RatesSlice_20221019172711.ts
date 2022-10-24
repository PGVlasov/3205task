import { IRate } from "../models/IRates";

interface RatesState {
  rates: IRate[];
  isLoading: boolean;
  error: string;
}

const initialState: RatesState = {};

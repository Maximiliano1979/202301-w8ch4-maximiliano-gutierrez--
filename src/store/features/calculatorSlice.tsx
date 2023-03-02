import { Calculator } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initCalculatorState: Calculator = {
  currentNumber: [],
  nextNumber: [],
  operator: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initCalculatorState,
  reducers: {
    addNumbers: (currentState: Calculator, action: PayloadAction<string>) => ({
      ...currentState,
      currentNumber: [[...currentState.currentNumber, action.payload].join("")],
    }),
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { addNumbers: addNumbersActionCreator } = calculatorSlice.actions;

// src/features/aiResponseSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createPortfolioData: null, // This will store your JSON response
  loading: false,
  error: null,
};

const aiResponseSlice = createSlice({
  name: "aiResponse",
  initialState,
  reducers: {
    setResponseData: (state, action) => {
      state.createPortfolioData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setResponseData, setLoading, setError } =
  aiResponseSlice.actions;

export default aiResponseSlice.reducer;

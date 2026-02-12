import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    reults: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setResults(state, action) {
      state.loading = false;
      state.reults = action.payload;
    },
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResult(state) {
      state.reults = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setLoading,
  setError,
  setResults,
  clearResult,
} = searchSlice.actions;

export default searchSlice.reducer;

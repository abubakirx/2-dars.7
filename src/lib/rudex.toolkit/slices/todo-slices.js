import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
  filter: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData(state, { payload }) {
      state.data = payload;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, setLoading } = todoSlice.actions;

export default todoSlice.reducer;

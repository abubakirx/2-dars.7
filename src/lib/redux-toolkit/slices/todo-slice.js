import { createSlice } from '@reduxjs/toolkit'
import { deleteTodo as deleteTodoApi } from "../../../request";

const initialState = {
  data: [],
  loading: false,
  error: null,
  filter: {
  priority: "",
  },
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setData(state, {payload}){
        state.data = payload;
    },
    addData(state, {payload}){
        state.data.unshift(payload);
    },
    setLoading(state, {payload}){
        state.loading = payload;
    },
    setFilter(state, {payload}){
        state.filter = payload;
    },
    removeData(state, {payload}) {
        state.data = state.data.filter(todo => todo.id !== payload);
    },
  },
})

export function deleteTodoThunk(id) {
  return async function(dispatch) {
    dispatch(setLoading(true));
    try {
      await deleteTodoApi(id);
      dispatch(removeData(id));
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(setLoading(false));
    }
  }
}

export const { setData, setLoading, setFilter, addData, removeData } = todoSlice.actions

export default todoSlice.reducer
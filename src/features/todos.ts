import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from '../api';
import { Todo } from '../types/Todo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', getTodos);

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default todosSlice.reducer;

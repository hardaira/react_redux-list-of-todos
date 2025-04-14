/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTodos } from '../api';
import { Todo } from '../types/Todo';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', getTodos);

export interface TodosState {
  todos: Todo[]; // Ensure the property name is 'todos' here
  status: 'idle' | 'loading' | 'failed';
}

// Define the initial state of the todos slice
const initialState: TodosState = {
  todos: [], // Ensure this matches the 'todos' property
  status: 'idle',
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading'; // When the async action is pending
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'idle'; // When the async action is fulfilled
        state.todos = action.payload; // Assign the fetched todos to the state
      })
      .addCase(fetchTodos.rejected, state => {
        state.status = 'failed'; // If the async action fails
      });
  },
});

export default todosSlice.reducer;

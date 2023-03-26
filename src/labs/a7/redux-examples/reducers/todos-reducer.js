import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
  {
    _id: "123",
    do: "Accelerate the world's transition to sustainable energy",
    done: false
  },
  {
    _id: "234",
    do: "Reduce space transportation costs to become a spacefaring civilization",
    done: true
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo(state, action) {
      state.push({
        _id: new Date().getTime(),
        do: action.payload.do,
        done: false
      })
    },
    deleteTodo(state, action) {
      const idx = action.payload;
      state.splice(idx, 1);
    },
    todoDoneToggle(state, action) {
      const idx = action.payload;
      state[idx].done = !state[idx].done;
    }
  }
});

export const {addTodo, deleteTodo, todoDoneToggle} = todoSlice.actions
export default todoSlice.reducer;
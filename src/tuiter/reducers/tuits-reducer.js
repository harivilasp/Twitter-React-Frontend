import {createSlice} from "@reduxjs/toolkit";
import tuits from "../data/tuits.json"

const currentUser = {
  "username": "NASA",
  "handle": "@nasa",
  "avatar": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "reply": 0,
  "retuit": 0,
  "like": 0,
}

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    }
  }

})

export const {deleteTuit, createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
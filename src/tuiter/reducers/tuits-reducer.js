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
      likeTuitToggle(state, action) {
        const post = state.find((post) =>
              post._id === action.payload._id)  // Finding the ToDo from the action payload.
        // todo.done = !todo.done  // Whatever is the current value of ToDo, change it to !ToDo i.e. reverse the value.
        // console.log(post._id)
        post.liked = !post.liked;
        post.like = (post.liked) ? post.like + 1 : post.like - 1;
        post.color = (post.liked) ? 'pink' : 'white';
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

export const {likeTuitToggle, deleteTuit, createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
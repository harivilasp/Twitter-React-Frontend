import userInfo from "../data/user-info.json";
import {createSlice} from "@reduxjs/toolkit";

const userInfoReducer = createSlice({
  name: "user",
  initialState: userInfo,
  reducers: {
    changeInfo(state, action) {
      // console.log(action.payload)
      // console.log(JSON.stringify(state));
      // state = {
      //   ...state,
      //   userName: action.payload.username,
      //   bio: action.payload.bio,
      //   location: action.payload.location,
      //   website: action.payload.website,
      //   dateOfBirth: action.payload.dateOfBirth
      // }
      state.userName = action.payload.username;
      state.bio = action.payload.bio;
      state.location = action.payload.location;
      state.website = action.payload.website;
      state.dateOfBirth = action.payload.dateOfBirth;
    }
  }
})

export const {changeInfo} = userInfoReducer.actions;
export default userInfoReducer.reducer;
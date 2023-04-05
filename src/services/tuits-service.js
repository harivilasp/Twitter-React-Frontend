import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_A9;
// console.log("API_BASE "+API_BASE)
// const API_BASE = "http://localhost:4000/api"
// const API_BASE = "https://tuiter-node-app-cs5610-07-sp23.onrender.com/api";
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit)
  return response.data;
}

export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  console.log("Tuits "+tuits)
  return tuits;
}

export const deleteTuit = async (tid) => {
  const response = await axios
  .delete(`${TUITS_API}/${tid}`)
  return response.data
}

export const updateTuit = async (tuit) => {
  await axios
  .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}
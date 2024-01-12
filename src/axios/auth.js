import { Axios } from "./axios";

export const signin = async (data) => {
  return await Axios.post("/auth/signin", data);
};

export const signup = async (data) => {
  console.log("signup data : ", data);
  return await Axios.post("/auth/signup", data);
};

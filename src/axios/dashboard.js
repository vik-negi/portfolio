import { Axios } from "./axios";

export const dashboard = async () => {
  return await Axios.get("/api/users");
};

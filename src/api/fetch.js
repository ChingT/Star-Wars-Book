import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.constructor-learning.com/api/",
});

export const fetchFilms = async () => {
  const response = await api.get("/films");
  return response.data.results;
};

import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.constructor-learning.com/api/",
});

export const fetchFilms = async () => {
  const response = await api.get("/films");
  return response.data.results;
};

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchFromUrls = async (urls) =>
  await Promise.all(urls.map(fetchData));

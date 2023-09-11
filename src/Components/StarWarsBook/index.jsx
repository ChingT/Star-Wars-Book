/* eslint-disable react/jsx-key */
import Film from "../Film";
import Starship from "../Starship";
import Pilot from "../Pilot";
import FavoritePilot from "../FavoritePilot";
import { fetchFilms } from "../../api/fetch";
import { useEffect, useState } from "react";

const StarWarsBook = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const films = await fetchFilms();
      setFilms(films);
    };
    getFilms();
  }, []);

  const renderFilms = () =>
    films.map((film) => (
      <Film
        title={film.title}
        opening_crawl={film.opening_crawl}
        episode_id={film.episode_id}
        release_date={film.release_date}
      />
    ));

  return (
    <>
      {renderFilms()}
      <Starship />
      <Pilot />
      <FavoritePilot />
    </>
  );
};

export default StarWarsBook;

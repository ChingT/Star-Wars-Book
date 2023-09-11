/* eslint-disable react/jsx-key */
import Film from "../Film";
import Starship from "../Starship";
import Pilot from "../Pilot";
import FavoritePilot from "../FavoritePilot";
import { fetchFilms, fetchFromUrls } from "../../api/fetch";
import { useEffect, useState } from "react";

const StarWarsBook = () => {
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const films = await fetchFilms();
      setFilms(films);
    };
    getFilms();
  }, []);

  const handleShowStarships = async (starshipURLs) => {
    const s = await fetchFromUrls(starshipURLs);
    setStarships(s);
  };
  const handleShowPilots = async (pilotURLs) => {
    const s = await fetchFromUrls(pilotURLs);
    setPilots(s);
  };
  const handleAddFavorites = async (pilotName) =>
    setFavorites((prevState) => [pilotName, ...prevState]);

  const renderFilms = () =>
    films.map((film) => (
      <Film
        key={film.episode_id}
        title={film.title}
        opening_crawl={film.opening_crawl}
        episode_id={film.episode_id}
        release_date={film.release_date}
        handleShowStarships={() => handleShowStarships(film.starships)}
      />
    ));

  const renderStarships = () =>
    starships.map((starship) => (
      <Starship
        key={starship.name}
        name={starship.name}
        model={starship.model}
        max_atmosphering_speed={starship.max_atmosphering_speed}
        starship_class={starship.starship_class}
        handleShowPilots={() => handleShowPilots(starship.pilots)}
      />
    ));

  const renderPilots = () =>
    pilots.map((pilot) => (
      <Pilot
        key={pilot.name}
        name={pilot.name}
        height={pilot.height}
        mass={pilot.mass}
        birth_year={pilot.birth_year}
        gender={pilot.gender}
        handleAddFavorites={() => handleAddFavorites(pilot.name)}
      />
    ));

  return (
    <>
      {renderFilms()}
      {renderStarships()}
      {renderPilots()}
      <FavoritePilot />
    </>
  );
};

export default StarWarsBook;

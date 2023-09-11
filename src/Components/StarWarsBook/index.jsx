/* eslint-disable react/jsx-key */
import Film from "../Film";
import Starship from "../Starship";
import Pilot from "../Pilot";
import FavoritePilot from "../FavoritePilot";
import { fetchFilms, fetchFromUrls } from "../../api/fetch";
import { Book, Column, Header } from "../../global-styles/styled.js";
import { useEffect, useState } from "react";

const StarWarsBook = () => {
  const [films, setFilms] = useState([]);
  const [starships, setStarships] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [toggleFilm, setTogglefilm] = useState("");
  const [toggleStarship, setToggleStarship] = useState("");

  useEffect(() => {
    const getFilms = async () => {
      const films = await fetchFilms();
      setFilms(films);
    };
    getFilms();
  }, []);

  const handleToggleFilm = (filmTitle) => {
    setTogglefilm(filmTitle);
    setStarships([]);
    setPilots([]);
  };
  const handelToggleStarship = (StarshipTitle) => {
    setToggleStarship(StarshipTitle);
    setPilots([]);
  };

  const handleShowStarships = async (starshipURLs) =>
    setStarships(await fetchFromUrls(starshipURLs));

  const handleShowPilots = async (pilotURLs) =>
    setPilots(await fetchFromUrls(pilotURLs));

  const handleAddFavorites = async (pilotName) =>
    setFavorites((prevState) =>
      prevState.includes(pilotName) ? prevState : [pilotName, ...prevState]
    );
  const handleRemoveFavorites = async (pilotName) =>
    setFavorites((prevState) => prevState.filter((name) => name !== pilotName));

  const renderFilms = () =>
    films.map((film) => (
      <Film
        key={film.episode_id}
        film={film}
        handleShowStarships={() => handleShowStarships(film.starships)}
        toggle={toggleFilm}
        handleToggle={handleToggleFilm}
      />
    ));

  const renderStarships = () =>
    starships.map((starship) => (
      <Starship
        key={starship.name}
        starship={starship}
        handleShowPilots={() => handleShowPilots(starship.pilots)}
        toggle={toggleStarship}
        handelToggle={handelToggleStarship}
      />
    ));

  const renderPilots = () =>
    pilots.map((pilot) => (
      <Pilot
        key={pilot.name}
        pilot={pilot}
        handleAddFavorites={() => handleAddFavorites(pilot.name)}
      />
    ));

  const renderFavorites = () =>
    favorites.map((pilotName) => (
      <FavoritePilot
        key={pilotName}
        name={pilotName}
        handleRemoveFavorites={() => handleRemoveFavorites(pilotName)}
      />
    ));

  return (
    <Book>
      <Column>
        <Header>Fims</Header>
        {renderFilms()}
      </Column>
      <Column>
        <Header>Starships</Header>
        {renderStarships()}
      </Column>
      <Column>
        <Header>Pilots</Header>
        {renderPilots()}
      </Column>
      <Column>
        <Header>Favorite Pilots</Header>
        {renderFavorites()}
      </Column>
    </Book>
  );
};

export default StarWarsBook;

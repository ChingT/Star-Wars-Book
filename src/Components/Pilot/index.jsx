/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

function Pilot({ name, height, mass, birth_year, gender, handleAddFavorites }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddFavorites();
  };

  return (
    <Card>
      <Title>{name}</Title>
      <Details>
        <div>Height: {height}</div>
        <div>Mass: {mass}</div>
        <div>Birth Year: {birth_year}</div>
        <div>Gender: {gender}</div>
      </Details>
      <Button onClick={handleClick}>Add favorite</Button>
    </Card>
  );
}

export default Pilot;

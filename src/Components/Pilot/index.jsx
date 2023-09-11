/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

function Pilot({ pilot, handleAddFavorites }) {
  const title = pilot.name;

  const handleClick = (e) => {
    e.preventDefault();
    handleAddFavorites();
  };

  return (
    <Card>
      <Title>{title}</Title>
      <Details>
        <div>Height: {pilot.height}</div>
        <div>Mass: {pilot.mass}</div>
        <div>Birth Year: {pilot.birth_year}</div>
        <div>Gender: {pilot.gender}</div>
      </Details>
      <Button onClick={handleClick}>Add favorite</Button>
    </Card>
  );
}

export default Pilot;

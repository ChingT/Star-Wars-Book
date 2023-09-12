/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

function Pilot({ pilot, favorites, handleAddFavorites }) {
  const title = pilot.name;

  const handleClick = (e) => {
    e.preventDefault();
    handleAddFavorites();
  };

  const getDetails = () => (
    <Details>
      <div>Height: {pilot.height}</div>
      <div>Mass: {pilot.mass}</div>
      <div>Birth Year: {pilot.birth_year}</div>
      <div>Gender: {pilot.gender}</div>
    </Details>
  );

  const getButton = () => <Button onClick={handleClick}>Add favorite</Button>;

  return (
    <Card>
      <Title>{title}</Title>
      {getDetails()}
      {!favorites.includes(title) ? getButton() : undefined}
    </Card>
  );
}

export default Pilot;

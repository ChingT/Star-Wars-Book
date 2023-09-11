/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

function Starship({
  starship,
  handleShowPilots,
  toggleStarship,
  setToggleStarship,
}) {
  const title = starship.name;

  const handleClick = (e) => {
    e.preventDefault();
    handleShowPilots();
  };

  const getDetails = () => (
    <Details>
      <div>Model: {starship.model}</div>
      <div>Max Atmosphering Speed: {starship.max_atmosphering_speed}</div>
      <div>Starship Class: {starship.starship_class}</div>
    </Details>
  );

  const getButton = () => <Button onClick={handleClick}>show pilots</Button>;

  return (
    <Card onClick={() => setToggleStarship(title)}>
      <Title>{title}</Title>
      {toggleStarship === title && getDetails()}
      {getButton()}
    </Card>
  );
}

export default Starship;

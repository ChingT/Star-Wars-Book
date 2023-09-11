/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

function Starship({
  name,
  model,
  max_atmosphering_speed,
  starship_class,
  handleShowPilots,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    handleShowPilots();
  };

  return (
    <Card>
      <Title>{name}</Title>
      <Details>
        <div>Model: {model}</div>
        <div>Max Atmosphering Speed: {max_atmosphering_speed}</div>
        <div>Starship Class: {starship_class}</div>
      </Details>
      <Button onClick={handleClick}>show pilots</Button>
    </Card>
  );
}

export default Starship;

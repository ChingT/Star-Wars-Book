/* eslint-disable react/prop-types */
import { Card, Title, Button } from "../../global-styles/styled.js";

function FavoritePilot({ name, handleRemoveFavorites }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleRemoveFavorites();
  };

  return (
    <Card>
      <Title>{name}</Title>
      <Button onClick={handleClick}>Remove</Button>
    </Card>
  );
}

export default FavoritePilot;

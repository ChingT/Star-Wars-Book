/* eslint-disable react/prop-types */
function FavoritePilot({ name, handleRemoveFavorites }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleRemoveFavorites();
  };

  return (
    <>
      <div>{name}</div>
      <button onClick={handleClick}>Remove</button>
    </>
  );
}

export default FavoritePilot;

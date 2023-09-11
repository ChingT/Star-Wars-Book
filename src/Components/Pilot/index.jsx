/* eslint-disable react/prop-types */
function Pilot({ name, height, mass, birth_year, gender, handleAddFavorites }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleAddFavorites();
  };

  return (
    <>
      <div>{name}</div>
      <div>Height: {height}</div>
      <div>Mass: {mass}</div>
      <div>Birth Year: {birth_year}</div>
      <div>Gender: {gender}</div>
      <button onClick={handleClick}>Add to Favorites</button>
    </>
  );
}

export default Pilot;

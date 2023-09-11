/* eslint-disable react/prop-types */
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
    <>
      <div>{name}</div>
      <div>Model: {model}</div>
      <div>Max Atmosphering Speed: {max_atmosphering_speed}</div>
      <div>Starship Class: {starship_class}</div>
      <button onClick={handleClick}>show pilots</button>
    </>
  );
}

export default Starship;

/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

String.prototype.removeNewline = function () {
  return this.split("\r\n").join(" ");
};

function Film({ film, handleShowStarships, toggle, handleToggle }) {
  const title = film.title;

  const handleClick = (e) => {
    e.preventDefault();
    handleShowStarships();
  };

  const getDetails = () => (
    <Details>
      <div>Opening Crawl: {film.opening_crawl.removeNewline()}</div>
      <div>Episode ID: {film.episode_id}</div>
      <div>Release Date: {film.release_date}</div>
    </Details>
  );

  return (
    <Card extend={toggle === title} onClick={() => handleToggle(title)}>
      <Title>{title}</Title>
      {toggle === title ? getDetails() : undefined}
      <Button onClick={handleClick}>show starships</Button>
    </Card>
  );
}

export default Film;

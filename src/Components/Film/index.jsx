/* eslint-disable react/prop-types */
import { Card, Title, Details, Button } from "../../global-styles/styled.js";

String.prototype.removeNewline = function () {
  return this.split("\r\n").join(" ");
};

function Film({
  title,
  opening_crawl,
  episode_id,
  release_date,
  handleShowStarships,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    handleShowStarships();
  };

  return (
    <Card>
      <Title>{title}</Title>
      <Details>
        <div>Opening Crawl: {opening_crawl.removeNewline()}</div>
        <div>Episode ID: {episode_id}</div>
        <div>Release Date: {release_date}</div>
      </Details>
      <Button onClick={handleClick}>show starships</Button>
    </Card>
  );
}

export default Film;

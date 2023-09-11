/* eslint-disable react/prop-types */
String.prototype.removeNewline = function () {
  return this.split("\r\n").join(" ");
};

function Film({ title, opening_crawl, episode_id, release_date }) {
  return (
    <>
      <div>{title}</div>
      <div>Opening Crawl: {opening_crawl.removeNewline()}</div>
      <div>Episode ID: {episode_id}</div>
      <div>Release Date: {release_date}</div>
    </>
  );
}

export default Film;

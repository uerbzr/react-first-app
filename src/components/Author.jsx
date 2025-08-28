import React from "react";

function Author({ author }) {
  return <li key={author.id}>{author.name}</li>;
}

export default Author;

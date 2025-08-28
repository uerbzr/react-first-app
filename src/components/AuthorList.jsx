import React from "react";
import "./AuthorList.css";

function AuthorList({ authors }) {
  return (
    <>
      <div className="author-component">
        <h1>Authors Component</h1>
        <ul>
          {authors.map((author) => {
            return <li key={author.id}>{author.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default AuthorList;

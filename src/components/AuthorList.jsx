import React from "react";
import Author from "./Author";
import "./AuthorList.css";

function AuthorList({ authors }) {
  return (
    <>
      <div className="author-component">
        <h1>Authors Component</h1>
        <ul>
          {authors.map((author) => {
            return <Author author={author} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default AuthorList;

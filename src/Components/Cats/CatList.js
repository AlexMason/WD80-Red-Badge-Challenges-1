import React, { Component } from "react";

const CatList = (props) => {
  return (
    <ul>
      {props.breeds.map((cat) => (
        <li>{cat}</li>
      ))}
    </ul>
  );
};

export default CatList;

import React from "react";

const addButton = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default addButton;

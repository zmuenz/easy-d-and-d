import React from "react";

const deleteButton = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default deleteButton;
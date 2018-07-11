import React from "react";

const cpButton = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default cpButton;
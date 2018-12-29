import React from "react";

export default props => (
  <div>
    <img src={props.img} />
    <p>
      {props.firstName} {props.lastName}
    </p>
  </div>
);

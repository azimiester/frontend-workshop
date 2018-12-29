import React from "react";
import { userInfo } from "os";

export default props => (
  <div>
    <img src={props.img} />
    <p>
      {props.firstName} {props.lastName}
    </p>
  </div>
);

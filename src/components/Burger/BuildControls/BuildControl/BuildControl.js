import React from "react";
import "./BuildControl.css";

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>
      {/* disabled is default property we can set on HTML button element! */}
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
    <p>Price: {props.ceni}</p>
  </div>
);

export default buildControl;

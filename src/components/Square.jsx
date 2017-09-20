import React from "react";
import ReactDOM from 'react-dom';

function Square(props) {
  var square = {
    background: "#fff",
    border: "1px solid #999",
    float: "left",
    fontSize: "50px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "60px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: "0",
    textAlign: "center",
    width: "60px",
    color: "pink"
  }

  return (
    <button style={square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;

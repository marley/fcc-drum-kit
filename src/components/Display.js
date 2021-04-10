import React from "react";

const Display = (props) => {
  let soundLastPlayed = "";
  if (Object.keys(props.lastPlayed).length !== 0) {
    soundLastPlayed = props.lastPlayed["sound"].split("/");
  }
  return (
    <div id="display">
      {soundLastPlayed ? soundLastPlayed[soundLastPlayed.length - 1] : ""}
    </div>
  );
};

export default Display;

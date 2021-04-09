import React from "react";
import DrumPad from "./DrumPad";

class DrumPads extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = [];
    let keys = Object.keys(this.props.data);
    for (let j = 0; j < keys.length; j++) {
      items.push(
        <DrumPad
          key={j}
          keyData={this.props.data[keys[j]]}
          refresh={this.props.refresh}
        />
      );
    }
    return (
      <div id="drum-pads" className="grid">
        {items}
      </div>
    );
  }
}

export default DrumPads;

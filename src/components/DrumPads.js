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
      items.push(<DrumPad keyData={this.props.data[keys[j]]} />);
    }
    return (
      <div id="drum-pads" className="grid">
        {items}
      </div>
      // <div id="drum-pads" className="d-flex flex-column">
      //   <div className="drum-pad-row d-flex flex-row">
      //     <DrumPad keyName={"Q"} />
      //     <DrumPad keyName={"W"} />
      //     <DrumPad keyName={"E"} />
      //   </div>
      //   <div className="drum-pad-row d-flex flex-row">
      //     <DrumPad keyName={"A"} />
      //     <DrumPad keyName={"S"} />
      //     <DrumPad keyName={"D"} />
      //   </div>
      //   <div className="drum-pad-row d-flex flex-row">
      //     <DrumPad keyName={"Z"} />
      //     <DrumPad keyName={"X"} />
      //     <DrumPad keyName={"C"} />
      //   </div>
      // </div>
    );
  }
}

export default DrumPads;

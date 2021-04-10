import React from "react";
import DrumPads from "./components/DrumPads";
import Display from "./components/Display";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumpadData: [
        {
          keyCode: 81,
          name: "Q",
          sound:
            "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        },
        {
          keyCode: 87,
          name: "W",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
          keyCode: 69,
          name: "E",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
          keyCode: 65,
          name: "A",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
          keyCode: 83,
          name: "S",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
          keyCode: 68,
          name: "D",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
          keyCode: 90,
          name: "Z",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
          keyCode: 88,
          name: "X",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
          keyCode: 67,
          name: "C",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
      ],
      lastPlayed: {},
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.refreshDisplay = this.refreshDisplay.bind(this);
  }

  handleKeyDown(event) {
    let keyIdx = this.state.drumpadData.reduce(
      (triggerKeyIdx, drumpadObj, i) => {
        if (drumpadObj["keyCode"] === event.keyCode) {
          triggerKeyIdx = i;
        }
        return triggerKeyIdx;
      },
      -1
    );
    if (keyIdx >= 0) {
      const sound = document.getElementById(
        `${this.state.drumpadData[keyIdx]["name"]}`
      );
      sound.play();
      this.refreshDisplay(this.state.drumpadData[keyIdx]);
    }
  }

  refreshDisplay = (keyData) => {
    this.setState({
      lastPlayed: keyData,
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div id="drum-machine" onKeyDown={this.handleKeyDown}>
        <DrumPads data={this.state.drumpadData} refresh={this.refreshDisplay} />
        <Display lastPlayed={this.state.lastPlayed} />
      </div>
    );
  }
}

export default App;

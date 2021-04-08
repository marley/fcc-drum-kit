import React from "react";

var keyToData = {
  Q: [81, "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"],
  W: [87, "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"],
  E: [69, "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"],
  A: [65, "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"],
  S: [83, "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"],
  D: [68, "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"],
  Z: [90, "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"],
  X: [88, "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"],
  C: [67, "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"],
};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    // this.handleKeyDown = this.handleKeyDown(this);
  }

  playSound() {
    const sound = document.getElementById(`${this.props.keyData["name"]}`);
    sound.play();
  }

  // handleKeyDown(event) {
  //   console.log(`keydown ${event.keyCode}`);
  //   if (event.keyCode === keyToData[this.props.keyName][0]) {
  //     this.playSound();
  //   }
  // }

  // componentDidMount() {
  //   document.addEventListener("keydown", this.handleKeydown);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("keydown", this.handleKeydown);
  // }

  render() {
    return (
      <div
        id={`drum-pad-${this.props.keyData["name"]}`}
        className="drum-pad"
        onKeyDown={this.handleKeyDown}
      >
        <audio id={`${this.props.keyData["name"]}`} className="clip">
          <source src={this.props.keyData["sound"]} type="audio/mp3"></source>
        </audio>
        <button
          className="drum-pad btn btn-outline-light"
          onClick={this.playSound}
        >
          {this.props.keyData["name"]}
        </button>
      </div>
    );
  }
}

export default DrumPad;

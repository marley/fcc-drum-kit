import React from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
  }

  playSound() {
    const sound = document.getElementById(`${this.props.keyData["name"]}`);
    sound.play();
    this.props.refresh(this.props.keyData);
  }

  render() {
    return (
      <div
        id={`drum-${this.props.keyData["name"]}`}
        className="drum-pad d-flex justify-content-center align-items-center"
        onClick={this.playSound}
      >
        <audio
          id={`${this.props.keyData["name"]}`}
          className="clip"
          src={this.props.keyData["sound"]}
          type="audio/mp3"
        ></audio>
        {this.props.keyData["name"]}
      </div>
    );
  }
}

export default DrumPad;

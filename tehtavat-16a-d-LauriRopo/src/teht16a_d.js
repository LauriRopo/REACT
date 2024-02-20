import React, { useState } from "react";

class Laskuri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arvo: 0,
    };
  }

  kasvataLaskuria = () => {
    this.setState((prevState) => ({
      arvo: prevState.arvo + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.kasvataLaskuria}>Kasvata</button>
        <h1>Laskuri on {this.state.arvo}</h1>
      </div>
    );
  }
}

export { Laskuri };

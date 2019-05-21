import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <header>
        <h1>This is the Lol Master App</h1>
      </header>
    );
  }
}

render(<App />, document.getElementById("root"));

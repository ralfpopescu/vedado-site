import React, { Component } from "react";
import "./App.css";
import Art from "./components/Art";

class App extends Component {
  render() {
    return (
      <div
            style={{
              fontFamily: `Unica One`
            }}
          >
            <Art />
      </div>
    );
  }
}

export default App;

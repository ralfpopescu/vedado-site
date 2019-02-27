import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Art from "./components/Art";

class App extends Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald" />
          <meta name="author" content="SitePoint" />
          <link
            href="https://fonts.googleapis.com/css?family=Unica One"
            rel="stylesheet"
          />
        </head>
        <body>
          <div
            style={{
              fontFamily: `Unica One`
            }}
          >
            <Art />
          </div>
        </body>
      </html>
    );
  }
}

export default App;

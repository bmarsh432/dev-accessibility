import React from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import smiley from "./images/smiley.png";

function App() {
  return (
    <div className="App">
      <h1>How can we catch Accessibility issues</h1>
      <div>Here are some html elements which have some issues when it comes to acccessibility</div>
      <div>
        <h3>Button</h3>
        <Button></Button>
      </div>
      <div>
        <h3>Image</h3>
        <img src={smiley}></img>
      </div>
      <div>
        <h3>Input</h3>
        <Input type="text" labelText="Name" id="name" />
      </div>
      <div>
        <h3>Link</h3>
        <span
          onClick={() => console.log("Link clicked")}
          // role="button"
          // tabIndex={0}
          // onKeyDown={() => console.log("Link clicked")}
        >
          This is a link
        </span>
      </div>
      <div>
        <h3>Contrast</h3>
        <span style={{ color: "lightgray" }}>The quick brown fox jumps over the lazy dog</span>
      </div>
    </div>
  );
}

export default App;

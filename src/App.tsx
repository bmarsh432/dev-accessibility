import React from "react";
import thought from "./images/thought.png";

function App() {
  return (
    <div className="App">
      <h1>How can we catch Accessibility issues?</h1>
      <div>Here are some html elements which have some issues when it comes to acccessibility</div>
      <div>
        <h3>Button</h3>
        <button type="button"></button>
      </div>
      <div>
        <h3>Image</h3>
        <img src={thought}></img>
      </div>
      <div>
        <h3>Input</h3>
        <input type="text" />
      </div>
      <div>
        <h3>Link</h3>
        <span onClick={() => console.log("Link clicked")}>This is a link</span>
      </div>
      <div>
        <h3>Text</h3>
        <span style={{ color: "lightgray" }}>The quick brown fox jumps over the lazy dog</span>
      </div>
    </div>
    // <main className="App">
    //   <h1>How can we catch Accessibility issues</h1>
    //   <div>Hopefully now they are fixed.....</div>
    //   <div>
    //     <h2>Input</h2>
    //     <button type="button">Click me...</button>
    //   </div>
    //   <div>
    //     <h2>Input</h2>
    //     <img src={smiley} alt="smiley"></img>
    //   </div>
    //   <div>
    //     <h2>Input</h2>
    //     <label htmlFor="name">Name</label>
    //     <input name="name" id="name" type="text" />
    //   </div>
    //   <div>
    //     <h2>Link</h2>
    //     <span
    //       onClick={() => console.log("Link clicked")}
    //       role="button"
    //       tabIndex={0}
    //       onKeyDown={() => console.log("Link clicked")}
    //     >
    //       This is a link
    //     </span>
    //   </div>
    //   <div>
    //     <h2>Contrast</h2>
    //     <span style={{ color: "black" }}>The quick brown fox jumps over the lazy dog</span>
    //   </div>
    // </main>
  );
}

export default App;

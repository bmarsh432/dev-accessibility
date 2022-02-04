import React from "react";
import thought from "./images/thought.png";

const sample3 = require("./audio/sample3.mp3");

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
        <a />
      </div>
      {/* <div>
        <div
          id="testTree"
          tabIndex={0}
          role="tree"
          aria-label="Test"
          aria-owns="ti1 ti2 ti3"
          aria-activedescendant="234"
        >
          <div tabIndex={-1} aria-selected="true" id="ti1">
            Item One
          </div>
          <div tabIndex={-1} aria-selected="false" id="ti2">
            Item Two
          </div>
          <div tabIndex={-1} aria-selected="false" id="ti3">
            Item Three
          </div>
        </div>
      </div> */}
      <div>
        <div id="address_1">Enter your address</div>
        <input aria-labeledby="address_1" />
      </div>
      <div aria-hidden="yes">This should be hidden</div>
      <div role="range">This isn't a range component</div>
      <div>
        <h3>Input</h3>
        <input type="text" />
      </div>
      <div>
        <h1 />
      </div>
      <iframe title="" />
      <div>
        <h3>Image</h3>
        <img src={thought} alt="Photo"></img>
      </div>
      <div>
        <span onClick={() => console.log("span clicked")} role="button" />
      </div>
      <div>
        <input type="text" />
        <label>Name</label>
      </div>
      <div>
        <audio src={sample3} />
      </div>
      <div onMouseOver={() => console.log("mouseOver")} />
      <div accessKey="p" />
      <input type="text" autoFocus={true} />
      <table>
        <tr role="presentation"></tr>
        <tr>
          <td>&nbsp;</td>
          <td>Knocky</td>
          <td>Flor</td>
          <td>Ella</td>
          <td>Juan</td>
        </tr>
        <tr>
          <td>Breed</td>
          <td>Jack Russell</td>
          <td>Poodle</td>
          <td>Streetdog</td>
          <td>Cocker Spaniel</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>16</td>
          <td>9</td>
          <td>10</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>Mother-in-law</td>
          <td>Me</td>
          <td>Me</td>
          <td>Sister-in-law</td>
        </tr>
        <tr>
          <td>Eating Habits</td>
          <td>Eats everyone's leftovers</td>
          <td>Nibbles at food</td>
          <td>Hearty eater</td>
          <td>Will eat till he explodes</td>
        </tr>
      </table>
      <div tabIndex="0" />
      <button role="button" />
      <span role="checkbox" aria-labelledby="blah" tabIndex={0}></span>
      <ul role="radiogroup" aria-labelledby="foo">
        <li aria-required tabIndex={-1} role="radio" aria-checked="false">
          Apollo
        </li>
        <li aria-required tabIndex={-1} role="radio" aria-checked="false">
          Avengers
        </li>
        <li aria-required tabIndex={0} role="radio" aria-checked="true">
          Swat Kats
        </li>
      </ul>
      <div scope />
      <span tabIndex={4} />
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

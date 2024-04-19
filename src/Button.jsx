import React from 'react';

function printHello(event) {
  console.log("Hello");
  console.log(event);
}

function printBye() {
  console.log("BYe");
}

function doubleClick() {
  console.log("You double clicked ME");
}

function handleMouseOver() {
  console.log("Mouse over event occurred");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click Me</button>
      <p onClick={printBye}>This paragraph is a demo</p>
      <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente ut soluta fugiat suscipit repellat, possimus quisquam minima odio temporibus! Fugit eligendi magni, cumque earum dolorum error aut suscipit eveniet!</p>
      <button onDoubleClick={doubleClick}>Double click Me</button>
    </div>
  );
}

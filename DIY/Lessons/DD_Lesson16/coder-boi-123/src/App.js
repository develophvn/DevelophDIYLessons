import { useState } from "react";
import NameDisplayer from "./NameDisplayer";
import onepieceimage from './onepiece.jpg';
import logo from "./logo.svg";
import blackguythinking from "./blackguythinking.jpg";
import concerned from "./concerned.jpg_large";
import './App.css';

const IMAGES = [onepieceimage, logo, blackguythinking, concerned];
const NAMES = ["DevelophVN", "Vuong", "Quan", "Dat"];
// const onClick = function() {}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const number = 1;

const testFunc = function(a) {} // () => {}

function App() {
  // logic
  // const data = useState(IMAGES[0]);
  // const image = data[0];
  // const setImage = data[1];
  const [image, setImage] = useState(IMAGES[0]);
  const [name, setName] = useState(NAMES[0]);
  const onClick = () => {
    setImage(IMAGES[getRandomInt(IMAGES.length - 1)]);
    setName(NAMES[getRandomInt(NAMES.length - 1)])
  };
  console.log(image);
  return (
    <div className="App">
      <header className="App-header">
        <NameDisplayer name={name} />
        <img src={image} className="App-logo" alt="logo" />
        <button onClick={onClick}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;

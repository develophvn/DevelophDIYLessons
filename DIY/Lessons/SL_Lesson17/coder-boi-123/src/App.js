import { useState } from "react";
import NameDisplayer from "./Components/NameDisplayer";
import onepieceimage from "./asset/img/onepiece.jpg";
import logo from "./asset/img/logo.svg";
import blackguythinking from "./asset/img/blackguythinking.jpg";
import concerned from "./asset/img/concerned.jpg_large";
import SpinningImage from "./Components/SpiningImage";
import "./App.css";

const IMAGES = [onepieceimage, logo, blackguythinking, concerned];
const NAMES = ["One Piece", "Logo", "Thinking", "Concerned"];
// const onClick = function() {}

function getRandomInt(max = IMAGES.length) {
  return Math.floor(Math.random() * max);
}

/*
  0 1 2 3
  current = 1 0 2

*/

function App() {
  const [currentState, setCurrentState] = useState([1, 3, 2]);
  const [authorized, setAuthorized] = useState(true);
  const [name, setName] = useState(NAMES[0]);
  const onClick = (index) => {
    let set = new Set();
    currentState.forEach((e) => set.add(e));

    let temp = [...currentState];
    temp[index] = getRandomInt();
    setCurrentState(temp);
    // setCurrentState(getRandomInt());
    // setName(getRandomInt());
    console.log(currentState);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        {authorized
          ? currentState.map((value, index) => (
              <SpinningImage
                key={index}
                value={IMAGES[currentState[index]]}
                description={NAMES[currentState[index]]}
                onClick={(event) => onClick(index)}
              >
                <NameDisplayer name={NAMES[currentState[index]]} />
              </SpinningImage>
            ))
          : null}
      </header>
    </div>
  );
}

export default App;

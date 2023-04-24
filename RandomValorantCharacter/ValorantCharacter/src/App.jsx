import { useState } from "react";
import Character from "./Character";
import "./App.css";

function RandomCharacter() {
  const characters = ["Cypher", "Jett", "Omen", "Raze", "Sage", "Skye"];
  return characters[Math.floor(Math.random() * characters.length)];
}

function App() {
  const [characters, setCharacters] = useState([]);

  const handleClick = () => {
    setCharacters([...characters, RandomCharacter()]);
  };

  const characterList = characters.map((character, indx) => {
    return <Character key={indx} characterName={character} />;
  });

  return (
    <div className="App">
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
      <div className="characterList">{characterList}</div>
    </div>
  );
}

export default App;

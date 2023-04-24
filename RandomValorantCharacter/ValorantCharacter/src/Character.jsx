import Cypher from "./img/cypher.jpg";
import Jett from "./img/jett.jpg";
import Omen from "./img/omen.jpg";
import Raze from "./img/raze.jpg";
import Sage from "./img/sage.jpg";
import Skye from "./img/skye.jpg";
import "./Character.css";

const characterMap = {
  Cypher,
  Jett,
  Omen,
  Raze,
  Sage,
  Skye,
};

function Character({ characterName }) {
  console.log(characterName);
  return (
    <div className="charactersDiv">
      <img className="characterImg" src={characterMap[characterName]} alt="" />
    </div>
  );
}

export default Character;

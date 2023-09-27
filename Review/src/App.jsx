import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomInt = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

    setIndex((currentIndex) => {
      if (randomInt == currentIndex) {
        randomInt = currentIndex + 1;
      }
      const newIndex = randomInt % people.length;
      return newIndex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;

import { useEffect, useState } from "react";
import { longList, list, shortList } from "./data";
import {
  RiCheckDoubleFill,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from "react-icons/ri";

function Carousel() {
  const [people, setPeople] = useState(longList);

  const [currenPerson, setCurrentPerson] = useState(0);

  const handlePrevClick = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const handleNextClick = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      handleNextClick();
    }, 2000);

    return () => {
      clearInterval(sliderId);
    };
  }, [currenPerson]);

  return (
    <section className="mx-auto mt-40 relative overflow-hidden ">
      {people.map((person, personIndex) => {
        return (
          <article
            key={person.id}
            className="text-center absolute left-0 top-0 w-full h-full  transition-all ease-in-out duration-300 flex flex-col gap-3 "
            style={{
              transform: `translateX(${100 * (personIndex - currenPerson)}%)`,
              opacity: personIndex === currenPerson ? 1 : 0,
              visibility: personIndex === currenPerson ? "visible" : "hidden",
            }}
          >
            <img
              src={person.image}
              alt=""
              className="rounded-full object-cover border-2 border-purple-300 mb-6 shadow-lg shadow-purple-300 mx-auto "
            />

            <div>
              <h2 className="text-xl uppercase leading-4 text-purple-600">
                {person.name}
              </h2>
              <h3 className="text-sm text-gray-800 mt-2 capitalize">
                {person.title}
              </h3>
            </div>
            <p className="text-gray-600">{person.quote}</p>
            <RiCheckDoubleFill className="mx-auto text-8xl text-purple-400" />
          </article>
        );
      })}
      <button
        className="md:text-5xl text-2xl absolute left-0 top-1/3 bg-slate-300 rounded-sm hover:bg-purple-400 transition duration-300 "
        onClick={handlePrevClick}
      >
        <RiArrowDropLeftLine className="md:h-10 md:w-10 h-6 w-6 " />
      </button>
      <button
        className="md:text-5xl text-2xl absolute right-0 top-1/3  bg-slate-300 rounded-sm  hover:bg-purple-400 transition duration-300 "
        onClick={handleNextClick}
      >
        <RiArrowDropRightLine className="md:h-10 md:w-10 h-6 w-6 " />
      </button>
    </section>
  );
}

export default Carousel;

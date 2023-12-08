import { useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
function App() {
  const [count, setCount] = useState(0);
  const [generatedParagraphs, setGeneratedParagraphs] = useState([]);

  const handleChange = (e) => {
    console.log("e  ", e);
    console.log("e.target  ", e.target);
    setCount(e.target.value);
    console.log(count);
  };

  const handleClick = () => {
    const paragraphs = Array.from({ length: parseInt(count) }, (index) => (
      <LoremIpsum key={index} p={1} />
    ));

    setGeneratedParagraphs(paragraphs);
    console.log(generatedParagraphs);
  };

  return (
    <main className="w-9/12 mx-auto ">
      <h1 className="text-4xl text-center mt-20">Random Paragraph Generator</h1>

      <div className="w-1/2 mx-auto flex  items-center mt-10 gap-5 justify-center">
        <h3 className="text-2xl ">Paragraphs:</h3>
        <input
          type="number"
          min={1}
          max={100}
          value={count}
          onChange={handleChange}
          className="bg-slate-300 w-20 rounded-md text-xl py-1 px-2 caret-violet-950"
        />
        <button
          className="bg-cyan-600 px-3 py-1 text-xl rounded-md"
          onClick={handleClick}
        >
          Generate
        </button>
      </div>
      <div className="w-10/12">
        {generatedParagraphs.map((paragraph, index) => (
          <div key={index}>{paragraph}</div>
        ))}
      </div>
    </main>
  );
}

export default App;

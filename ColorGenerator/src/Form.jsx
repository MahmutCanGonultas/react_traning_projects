import { useState } from "react";

function Form({ addColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <form
      className="flex mt-16 ml-14 gap-5 items-center"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl">Color Generator</h1>
      <input
        className="border-0 bg-transparent w-14 h-10"
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        name=""
        id=""
      />

      <input
        className="w-56 h-10 text-2xl pl-4"
        placeholder="#2d8647"
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />

      <button
        className="bg-violet-600 text-lg p-2 px-3 rounded-lg text-white hover:bg-violet-700 "
        style={{ background: `${color}` }}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;

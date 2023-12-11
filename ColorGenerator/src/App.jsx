import { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#68bc62").all(10));

  const addColor = (newColor) => {
    try {
      setColors(new Values(`${newColor}`).all(10));
    } catch (error) {
      toast.error(error.message);
    }
    console.log(newColor);
  };

  return (
    <div>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
}

export default App;

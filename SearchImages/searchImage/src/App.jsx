import { useState } from "react";
import SearchHeader from "./components/SearchHeader";
import searchImages from "./api";
import ImageList from "./components/ImageList";

import "./css/App.css";

function App() {
  const [images, setImages] = useState([]);

  const searchPhotos = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };

  return (
    <div>
      <SearchHeader onSubmit={searchPhotos} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

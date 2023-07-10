import { useState } from "react";
import "../css/SearchHeader.css";
import logo from "../img/logos.png";

function SearchHeader({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-header">
      <img src={logo} alt="" className="logo" />
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="search-label">What photos do you want</label>
        <input className="search-input" onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;

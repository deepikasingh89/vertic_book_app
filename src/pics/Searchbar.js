import React, { useState }  from "react";
import './SearchBar.css';

export default function Searchbar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(term);
    console.log("dsfd,", term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmitForm}>
        <label>Enter Search:</label>
        <input name="search" type="text" onChange={handleChange} value={term} />
      </form>

      {/* <button onClick={searchText}>Search</button> */}
    </div>
  );
}

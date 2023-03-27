import React, { useState } from "react";
import useBookContext from "../hooks/use-books-context";


export default function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();
  const handleAddBook = (event) => {
    setTitle(event.target.value);
  };
  const addBook = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h4>Add a Book</h4>
      <label>Title</label>
      <input
        className="input"
        type="text"
        onChange={handleAddBook}
        value={title}
      />
      <button className="button" type="submit" onClick={addBook}>
        Crete
      </button>
    </div>
  );
}

import React, { useState } from "react";
import useBookContext from "../hooks/use-books-context";

export default function BookEdit(props) {
  const [title, setTitle] = useState(props.bookedit.title);
  const { updateBookbyId } = useBookContext();
  const handleUpdateBook = (event) => {
    setTitle(event.target.value);
  };

  const updateBook = (event) => {
    event.preventDefault();
    console.log({ title });
    props.setShowEdit(false);
    updateBookbyId(props.bookedit.id, title);
  };
  return (
    <div>
      <form className="book-edit">
        <label>Title</label>
        <input
          className="input"
          type="text"
          onChange={handleUpdateBook}
          value={title}
        />
        <button
          className="button is-primary"
          type="submit"
          onClick={updateBook}
        >
          Save
        </button>
      </form>
    </div>
  );
}

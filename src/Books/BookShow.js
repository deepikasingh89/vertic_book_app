import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";

export default function BookShow(props) {
  const [showEdit,setShowEdit] = useState(false);
  const { deleteBookbyId } = useBookContext();

  const btndelete = () => {
    deleteBookbyId(props.book.id);
  };

  const btnedit=()=>{
    setShowEdit(!showEdit);
  }

  let content = <h5>{props.book.title}</h5>;
  if (showEdit){
    content = (
      <BookEdit
        bookedit={props.book}
        setShowEdit={setShowEdit}
        updateBookbyId={props.updateBookbyId}
      />
    );
  }
    return (
      <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${props.book.id}/300/200`} />
        {content}
        <div className="actions">
          <button className="edit" onClick={btnedit}>
            edit
          </button>
          <button className="delete" onClick={btndelete}>
            delete
          </button>
        </div>
      </div>
    );
}

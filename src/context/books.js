import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  //   const [count, setCount] = useState(0);

  //   const valteToShare = {
  //     count,
  //     incrementCount: () => {
  //       setCount(count + 1);
  //     },
  //   };

  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/books");
    console.log({ res });
    setBooks(res.data);
  }, []);

  //or const stableFetchBook = useCallback(fetchBooks,[]);

  const createBook = async (title) => {
    const res = await axios.post("http://localhost:3001/books", {
      title,
    });

    console.log({ res });
    const updatedbooks = [...books, res.data];
    console.log({ updatedbooks });
    setBooks(updatedbooks);
  };

  const deleteBookbyId = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedbooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedbooks);
  };

  const updateBookbyId = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log({ res });
    const updatedbooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedbooks);
  };

  const valueToShare = {
    books,
    deleteBookbyId,
    updateBookbyId,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

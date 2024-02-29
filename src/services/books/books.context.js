import React, { useState, useContext, createContext, useEffect } from "react";

import { booksRequest } from "./books.service";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [bookGenre, setBookGenre] = useState();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveBooks = () => {
    setIsLoading(true);

    booksRequest("Action/Adventure")
      .then((results) => {
        setIsLoading(false);
        setBooks(results);
        setBookGenre(bookGenre);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    retrieveBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        bookGenre,
        books,
        isLoading,
        error,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
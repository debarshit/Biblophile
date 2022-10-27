import React, { useState, useContext, createContext, useEffect } from "react";

import { booksRequest } from "./books.service";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveBooks = () => {
    setIsLoading(true);

    booksRequest()
      .then((results) => {
        setIsLoading(false);
        setBooks(results);
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
        books,
        isLoading,
        error,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
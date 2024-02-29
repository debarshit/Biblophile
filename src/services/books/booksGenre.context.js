import React, { useState, useContext, createContext, useEffect } from "react";

import { booksGenreRequest } from "./booksGenre.service";

export const BooksGenreContext = createContext();

export const BooksGenreContextProvider = ({ children }) => {
  const [booksGenre, setBooksGenre] = useState([]);
  const [isLoadingBooksGenre, setIsLoadingBooksGenre] = useState(false);
  const [errorBooksGenre, setErrorBooksGenre] = useState(null);

  const retrieveBooksGenre = () => {
    setIsLoadingBooksGenre(true);

    booksGenreRequest()
      .then((results) => {
        setIsLoadingBooksGenre(false);
        setBooksGenre(results);
      })
      .catch((err) => {
        setIsLoadingBooksGenre(false);
        setErrorBooksGenre(err);
      });
  };
  useEffect(() => {
    retrieveBooksGenre();
  }, []);

  return (
    <BooksGenreContext.Provider
      value={{
        booksGenre,
        isLoadingBooksGenre,
        errorBooksGenre,
      }}
    >
      {children}
    </BooksGenreContext.Provider>
  );
};
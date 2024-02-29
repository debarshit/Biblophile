export const booksGenreRequest = () => {
    return fetch(`https://distributable-soldi.000webhostapp.com/biblophile.php/?action=getBooksGenre`).then((bookGenre) => {
      return bookGenre.json();
    });
  };
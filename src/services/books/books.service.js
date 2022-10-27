export const booksRequest = () => {
    return fetch(`https://distributable-soldi.000webhostapp.com/biblophile.php/?action=getBooks`).then((book) => {
      return book.json();
    });
  };
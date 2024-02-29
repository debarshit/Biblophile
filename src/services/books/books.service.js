export const booksRequest = (bookGenre) => {
    return fetch(`https://distributable-soldi.000webhostapp.com/biblophile.php/?action=getBooks&bookGenre=`+bookGenre).then((book) => {
      return book.json();
    });
  };
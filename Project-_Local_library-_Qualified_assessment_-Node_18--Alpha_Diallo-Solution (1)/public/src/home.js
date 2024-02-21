function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    const isBorrowed = book.borrows.some(
      borrow => !borrow.returned
    );
    if (isBorrowed) {
      acc++
    }
    return acc;
  }, 0); 
}

function getMostCommonGenres(books) {
  let count = books.reduce((acc, {genre}) => {
    if(!acc[genre]) {
      acc[genre] = 1;
    } else {
      acc[genre]++;
    }
    return acc;
  }, {});

  return Object.entries(count).map(([name, count]) => ({
    name, 
    count    
  })).sort((a, b) => b.count - a.count).slice(0, 5);  
}

function getMostPopularBooks(books) {
  return books.map(book => {
    return {name: book.title, count: book.borrows.length};
  }).sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let count = books.reduce((acc, book) => {
      if (book.authorId === author.id) {
        acc += book.borrows.length;
      }
      return acc;
    }, 0);
    result.push({
      name: `${author.name.first} ${author.name.last}`,
      count: count
    });
  });

  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors
};
//helper function 
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

// Helper function to find a book by ID
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function getBorrowersDetails(borrows, accounts) {
  return borrows
    .map(borrow => {
      let account = accounts.find(acc => acc.id === borrow.id);
      return {
        ...borrow,
        ...account
      };
    })
    .slice(0, 10);
}

// Function to partition books by borrowed status
function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter(book => book.borrows[0].returned);
  let notReturned = books.filter(book => !book.borrows[0].returned);
  return [notReturned, returned];
}

// Function to get borrowers for a book using the helper function
function getBorrowersForBook(book, accounts) {
  return getBorrowersDetails(book.borrows, accounts);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
  getBorrowersDetails,
};
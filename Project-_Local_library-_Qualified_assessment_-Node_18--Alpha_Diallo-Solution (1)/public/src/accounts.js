function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => 
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  books.forEach(book => {
    const borrowed = book.borrows.some(borrow => borrow.id === account.id);
    if (borrowed) count++;
  });
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => 
    book.borrows.some(record => record.id === account.id && !record.returned)
  ).map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return { ...book, author }; 
  });
}

module.exports = {
  findAccountById, 
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount  
};
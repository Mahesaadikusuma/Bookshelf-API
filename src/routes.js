const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIDHandler,
  EditBookByIDHandler,
  DeleteBookByIDHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },

  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },

  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIDHandler,
  },

  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: EditBookByIDHandler,
  },

  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: DeleteBookByIDHandler,
  },
];

module.exports = routes;

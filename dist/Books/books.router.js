"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const hono_1 = require("hono");
const books_controller_1 = require("./books.controller");
exports.booksRouter = new hono_1.Hono();
//get all users      api/users
exports.booksRouter.get("/books", books_controller_1.listBooks);
//get a single user    api/users/1
exports.booksRouter.get("/books/:id", books_controller_1.getBooks);
// create a user 
exports.booksRouter.post("/books", books_controller_1.createBooks);
//update a user
exports.booksRouter.put("/books/:id", books_controller_1.updateBooks);
exports.booksRouter.delete("/books/:id", books_controller_1.deleteBooks);
//https:domai.com/api/users?limit=10
// //get all users      api/users
// userRouter.get("/users",adminRoleAuth, listUsers);
// //get a single user    api/users/1
// userRouter.get("/users/:id",userRoleAuth,userAdminRoleAuth, getUser);
// // create a user 
// userRouter.post("/users",userRoleAuth,userAdminRoleAuth, createUser);
// //update a user
// userRouter.put("/users/:id",adminRoleAuth, updateUser);
// userRouter.delete("/users/:id",adminRoleAuth, deleteUser);
// //https:domai.com/api/users?limit=10

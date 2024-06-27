"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooks = exports.updateBooks = exports.createBooks = exports.getBooks = exports.listBooks = void 0;
const books_service_1 = require("./books.service");
const listBooks = async (c) => {
    try {
        //limit the number of books to be returned
        const limit = Number(c.req.query('limit'));
        const data = await (0, books_service_1.BooksService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Book not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listBooks = listBooks;
const getBooks = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await (0, books_service_1.getBooksService)(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
};
exports.getBooks = getBooks;
const createBooks = async (c) => {
    try {
        const user = await c.req.json();
        const createdUser = await (0, books_service_1.createBooksService)(user);
        if (!createdUser)
            return c.text("User not created", 404);
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createBooks = createBooks;
const updateBooks = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await c.req.json();
    try {
        // search for the user
        const searchedBooks = await (0, books_service_1.getBooksService)(id);
        if (searchedBooks == undefined)
            return c.text("User not found", 404);
        // get the data and update it
        const res = await (0, books_service_1.updateBooksService)(id, user);
        // return a success message
        if (!res)
            return c.text("User not updated", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateBooks = updateBooks;
const deleteBooks = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    try {
        //search for the user
        const user = await (0, books_service_1.getBooksService)(id);
        if (user == undefined)
            return c.text("User not found", 404);
        //deleting the user
        const res = await (0, books_service_1.deleteBooksService)(id);
        if (!res)
            return c.text("User not deleted", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteBooks = deleteBooks;

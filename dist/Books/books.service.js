"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooksService = exports.updateBooksService = exports.createBooksService = exports.getBooksService = exports.BooksService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const BooksService = async (limit) => {
    if (limit) {
        return await db_1.default.query.tableBooks.findMany({
            limit: limit
        });
    }
    return await db_1.default.query.tableBooks.findMany();
};
exports.BooksService = BooksService;
const getBooksService = async (id) => {
    return await db_1.default.query.tableBooks.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.tableBooks.id, id)
    });
};
exports.getBooksService = getBooksService;
const createBooksService = async (user) => {
    await db_1.default.insert(schema_1.tableBooks).values(user);
    return "book created successfully";
};
exports.createBooksService = createBooksService;
const updateBooksService = async (id, user) => {
    await db_1.default.update(schema_1.tableBooks).set(user).where((0, drizzle_orm_1.eq)(schema_1.tableBooks.id, id));
    return "book updated successfully";
};
exports.updateBooksService = updateBooksService;
const deleteBooksService = async (id) => {
    await db_1.default.delete(schema_1.tableBooks).where((0, drizzle_orm_1.eq)(schema_1.tableBooks.id, id));
    return "book deleted successfully";
};
exports.deleteBooksService = deleteBooksService;

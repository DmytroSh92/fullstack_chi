"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const booksSlice_1 = require("../features/books/booksSlice");
const BookDetail = () => {
    const { id } = (0, react_router_dom_1.useParams)();
    const books = (0, react_redux_1.useSelector)(booksSlice_1.selectAllBooks);
    const book = books.find((book) => book.id === parseInt(id || ''));
    if (!book) {
        return react_1.default.createElement("h2", null, "Book not found");
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, book.name),
        react_1.default.createElement("p", null,
            "Author: ",
            book.author),
        react_1.default.createElement("p", null,
            "Rating: ",
            book.rating),
        react_1.default.createElement("img", { src: "https://via.placeholder.com/200", alt: "Book placeholder", width: "200" }),
        react_1.default.createElement("br", null),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Back to Book List")));
};
exports.default = BookDetail;

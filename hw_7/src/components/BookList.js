"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const booksSlice_1 = require("../features/books/booksSlice");
const booksSlice_2 = require("../features/books/booksSlice");
const react_router_dom_1 = require("react-router-dom");
const BookList = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const books = (0, react_redux_1.useSelector)((state) => state.books.items);
    const status = (0, react_redux_1.useSelector)(booksSlice_2.selectBooksStatus);
    const error = (0, react_redux_1.useSelector)(booksSlice_2.selectBooksError);
    (0, react_1.useEffect)(() => {
        if (status === 'idle') {
            dispatch((0, booksSlice_1.fetchBooks)());
        }
    }, [dispatch, status]);
    if (status === 'loading')
        return react_1.default.createElement("div", null, "Loading...");
    if (status === 'failed')
        return react_1.default.createElement("div", null, error);
    return (react_1.default.createElement("ul", null, books.map((book) => (react_1.default.createElement("li", { key: book.id },
        react_1.default.createElement(react_router_dom_1.Link, { to: `/book/${book.id}` },
            book.name,
            " by ",
            book.author))))));
};
exports.default = BookList;

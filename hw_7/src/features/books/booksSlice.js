"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectBooksError = exports.selectBooksStatus = exports.selectAllBooks = exports.fetchBooks = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    items: [],
    status: 'idle',
    error: null,
};
exports.fetchBooks = (0, toolkit_1.createAsyncThunk)('books/fetchBooks', () => __awaiter(void 0, void 0, void 0, function* () {
    const mockBooks = [
        { id: 1, name: 'Mock Book One', author: 'Mock Author One', rating: 4.5 },
        { id: 2, name: 'Mock Book Two', author: 'Mock Author Two', rating: 4.0 },
        { id: 3, name: 'Mock Book Three', author: 'Mock Author Three', rating: 3.6 },
    ];
    yield new Promise(resolve => setTimeout(resolve, 500));
    return mockBooks;
}));
const booksSlice = (0, toolkit_1.createSlice)({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(exports.fetchBooks.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(exports.fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
            .addCase(exports.fetchBooks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Failed to fetch books';
        });
    },
});
const selectAllBooks = (state) => state.books.items;
exports.selectAllBooks = selectAllBooks;
const selectBooksStatus = (state) => state.books.status;
exports.selectBooksStatus = selectBooksStatus;
const selectBooksError = (state) => state.books.error;
exports.selectBooksError = selectBooksError;
exports.default = booksSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface Book {
    id: number;
    name: string;
    author: string;
    rating: number;
}

interface BooksState {
    items: Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BooksState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchBooks = createAsyncThunk<Book[], void>(
    'books/fetchBooks',
    async () => {
        const mockBooks = [
            { id: 1, name: 'Mock Book One', author: 'Mock Author One', rating: 4.5 },
            { id: 2, name: 'Mock Book Two', author: 'Mock Author Two', rating: 4.0 },
            { id: 3, name: 'Mock Book Three', author: 'Mock Author Three', rating: 3.6 },
        ];

        await new Promise(resolve => setTimeout(resolve, 500));

        return mockBooks;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch books';
            });
    },
});

export const selectAllBooks = (state: RootState) => state.books.items;
export const selectBooksStatus = (state: RootState) => state.books.status;
export const selectBooksError = (state: RootState) => state.books.error;

export default booksSlice.reducer;
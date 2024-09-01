import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../features/books/booksSlice';
import { AppDispatch, RootState } from '../store';
import { selectBooksStatus, selectBooksError } from '../features/books/booksSlice';
import {Link} from "react-router-dom";

const BookList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.items);
    const status = useSelector(selectBooksStatus);
    const error = useSelector(selectBooksError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBooks());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>{error}</div>;

    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    <Link to={`/book/${book.id}`}>
                        {book.name} by {book.author}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default BookList;

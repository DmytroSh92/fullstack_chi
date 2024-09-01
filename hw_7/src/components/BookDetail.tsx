import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../features/books/booksSlice';

const BookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const books = useSelector(selectAllBooks);
    const book = books.find((book) => book.id === parseInt(id || ''));

    if (!book) {
        return <h2>Book not found</h2>;
    }

    return (
        <div>
            <h1>{book.name}</h1>
            <p>Author: {book.author}</p>
            <p>Rating: {book.rating}</p>
            <img src="https://via.placeholder.com/200" alt="Book placeholder" width="200" />
            <br />
            <Link to="/">Back to Book List</Link>
        </div>
    );
};

export default BookDetail;
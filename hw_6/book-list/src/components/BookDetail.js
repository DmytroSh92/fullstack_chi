import React from 'react';
import { useParams, Link } from 'react-router-dom';

const books = [
    { id: 1, name: 'Book One', author: 'Author One', genre: 'Fiction', rating: 4.5, description: 'Description of Book One' },
    { id: 2, name: 'Book Two', author: 'Author Two', genre: 'Non-Fiction', rating: 4.0, description: 'Description of Book Two' },
];

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find((book) => book.id === parseInt(id));

    if (!book) {
        return <h2>Book not found</h2>;
    }

    return (
        <div>
            <h1>{book.name}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <img src="https://via.placeholder.com/200" alt="Book placeholder" width="200" />
            <br />
            <Link to="/">Back to Book List</Link>
        </div>
    );
};

export default BookDetail;
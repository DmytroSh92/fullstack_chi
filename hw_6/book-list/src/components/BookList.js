import React from 'react';
import { Link } from 'react-router-dom';

const books = [
    { id: 1, name: 'Book One', author: 'Author One', rating: 4.5 },
    { id: 2, name: 'Book Two', author: 'Author Two', rating: 4.0 },
];

const BookList = () => {
    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}>
                            <h2>{book.name}</h2>
                            <p>Author: {book.author}</p>
                            <p>Rating: {book.rating}</p>
                            <img src="https://via.placeholder.com/200" alt="Book placeholder" width="100" />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
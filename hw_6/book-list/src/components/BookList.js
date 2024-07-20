import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const books = [
    { id: 1, name: 'Book One', author: 'Author One', rating: 4.5, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Book Two', author: 'Author Two', rating: 4.0, image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Book Three', author: 'Author Three', rating: 3.6, image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Book Four', author: 'Author Four', rating: 4.1, image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Book Five', author: 'Author Five', rating: 4.3, image: 'https://via.placeholder.com/100' },
    { id: 6, name: 'Book Six', author: 'Author Six', rating: 3.0, image: 'https://via.placeholder.com/100' },
    { id: 7, name: 'Book Seven', author: 'Author Seven', rating: 5.0, image: 'https://via.placeholder.com/100' }
];

const BookList = () => {
    return (
        <Container>
            <Typography variant="h1" gutterBottom>
                Book List
            </Typography>
            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={book.image}
                                alt={`Cover of ${book.name}`}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {book.name}
                                    </Link>
                                </Typography>
                                <Typography color="textSecondary">
                                    Author: {book.author}
                                </Typography>
                                <Typography color="textPrimary">
                                    Rating: {book.rating}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BookList;
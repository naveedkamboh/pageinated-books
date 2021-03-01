import React from 'react'
import {
    Card,
    Col
    
  } from 'react-bootstrap';

const Book = ({book}) => {
    return (

        <Col xs="12" lg="6" className="mb-4" >
            <Card border="primary" >
                <Card.Body>
                    <Card.Title className="text-primary">{book.book_title}</Card.Title>
                    <Card.Text>
                        Book author:{' '}
                        {book.book_author.map((bookAuthor, index) => bookAuthor)}
                    </Card.Text>
                    <Card.Text>Book pages: {book.book_pages}</Card.Text>
                    <Card.Text>
                        Publication year: {book.book_publication_year}
                    </Card.Text>
                    <Card.Text>
                        Publication country: {book.book_publication_country}
                    </Card.Text>
                    <Card.Text>
                        Publication city: {book.book_publication_city}
                    </Card.Text>
                    <Card.Text>
                       Shelf Id: {book.id}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default (Book)


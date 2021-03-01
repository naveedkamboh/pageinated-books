import queryString from 'query-string';
import React, { useCallback, useEffect, useState } from 'react';
import api from  '../../api/api';
import { useHistory, useLocation } from 'react-router-dom';
import NoResultsFound from  '../common/NoResultsFound';
import Book from './book';
import {
  Button,
  Col,
  Container,
  Jumbotron,
  Row,
  Spinner
} from 'react-bootstrap';
const BookList = () => {

  const location = useLocation();
  const history = useHistory();
  const path = window.location.pathname;
  const initialQueryString = queryString.parse(location.search);
  const initialPageNumber = Number(initialQueryString.page) || 1;


  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPageNumber);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);

 

  useEffect(() => {
    history.push(`${path}?page=${currentPage}`);
   
  }, []);

  useEffect(() => {
    setLoaded(false);

    api.books
      .postBooks({
        page: currentPage,
        itemsPerPage: 20,
        filters: [{ type: 'all', values: [searchTerm] }]
      })
      .then(res => {
        setLoaded(true);
        setSearched(false);
        return setData(res);
      });
    
  }, [currentPage, searched]);

  useEffect(() => {
    if (currentPage > 0) {
      history.push(`${path}?page=${currentPage}`);
    }
  }, [currentPage, history, path]);

  const handleSearchInputChange = useCallback(searchTermValue => {
    setSearchTerm(searchTermValue);
  }, []);

  const handleSearchSubmit = useCallback(event => {
    event.preventDefault();
    setCurrentPage(1);
    setSearched(true);
  }, []);

  

  return (
    <Container>
      <Jumbotron className="text-white text-center  my-5 bg-secondary">
        <h1 className="h1 text-center">Paginated Books</h1>
      </Jumbotron>

      <Row className="mt-4">
        {data && loaded ? (
          data.items.books.map(book => (
         <Book book={book} key={book.id}/>
          ))
        ) : (
          <Col
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ minHeight: '60vh' }}
          >
            <Spinner animation="border" variant="secondary" />
          </Col>
        )}
        {data && loaded && data.items.books.length <= 0 && <NoResultsFound />}
      </Row>
      <Row className="mx-auto">
        
        <Col xs="12" sm="6" className="d-flex justify-content-end">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-3 px-md-5"
          >
            Prev Page
          </Button>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={data ? data.moreItems : false}
            className="px-md-5"
          >
            Next Page
          </Button>
        </Col>
      </Row>
      
    </Container>
  );
};

export default BookList;

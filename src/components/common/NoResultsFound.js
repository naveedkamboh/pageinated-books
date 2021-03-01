import React from 'react';
import { Button, Col } from 'react-bootstrap';

const NoResultsfound = () => (
  <Col
    className="d-flex justify-content-center align-items-center flex-column"
    style={{ minHeight: '60vh' }}
  >
    <p className="mb-5">No result found. Try again later please.</p>
    <Button onClick={() => window.location.reload()}>Refresh</Button>
  </Col>
);
export default NoResultsfound;

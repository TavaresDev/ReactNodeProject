import React from 'react';
import { Container } from 'react-bootstrap';
// import DataFetching from '../../Movies/APISearch';
import DataFetching from '../Home/APISearch';
import Header from '../../shared/Header';

const Home = () => {
  return (
    <>
      <Container>
        <DataFetching/>

      </Container>
    </>
  );
}
 
export default Home;
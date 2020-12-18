import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import MovieForm from '../MovieForm';

const New = () => {
  return (
    <>
      <Header title="Add Movies">
      

      </Header>
      
      <Container>


        <MovieForm endpoint="movies"/>
      </Container>
    </>
  );
}
 
export default New;
import React from 'react';
import { Container } from 'react-bootstrap';
// import DataFetching from '../../Movies/APISearch';
import DataFetching from '../Home/APISearch';
import Header from '../../shared/Header';
import Banner from './Banner';

const Home = () => {
  return (
    <>
    
        <Banner title='Title goes here' subTitle='SUb is here' img='https://via.placeholder.com/1200x600' >

        </Banner>
        {/* <DataFetching/> */}

      
    </>
  );
}
 
export default Home;
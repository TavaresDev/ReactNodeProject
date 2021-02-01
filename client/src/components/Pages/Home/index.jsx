import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'

import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import Banner from './Banner';

const Home = () => {
  const tmdbKey = '16de3d175c4180739924271ad90578a1'
  // const fetchURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`
  const fetchtbdbURL = `https://api.themoviedb.org/3/movie/popular?api_key=16de3d175c4180739924271ad90578a1&language=en-US&page=1`
  const [homeMovies, setHomeMovies] = useState([])

  useEffect(() => {
    Axios.get(fetchtbdbURL)
      .then(res => {
        console.log(res)
        console.log(res.data.results)
        setHomeMovies(res.data.results)

      })
      .catch((err) => {
        if (err.response) {
          console.log("respo")
        } else if (err.request) {
          console.log("request")
          console.log(err)
        } else {
          console.log(err)

        }
      })
  }, [])


  return (
    <>

      <Banner title='Discover Movies and Where to watch Them' subTitle='' img='' />

      <Container>
        {homeMovies.map((movie) => (
          <h1>{movie.id}</h1>
        ))}

      </Container>


    </>
  );
}

export default Home;
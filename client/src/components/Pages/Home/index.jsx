import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'

import { Card, Container, Image, Row } from 'react-bootstrap';
import Header from '../../shared/Header';
import Banner from './Banner';
import HomeCarousel from './MoviesCarousel';
import { Link } from 'react-router-dom';
import MoviesCarousel from './MoviesCarousel';

const Home = () => {
  const tmdbKey = '16de3d175c4180739924271ad90578a1'
  // const fetchURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`
  const fetchtbdbURL = `https://api.themoviedb.org/3/movie/popular?api_key=16de3d175c4180739924271ad90578a1&language=en-US&page=1`
  const topMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=16de3d175c4180739924271ad90578a1&language=en-US&page=1`
  const trendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=16de3d175c4180739924271ad90578a1`
  const imagePath = 'https://image.tmdb.org/t/p/w500/'


  const [homeMovies, setHomeMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    Axios.get(trendingMoviesURL)
      .then(res => {
        console.log(res)
        console.log(res.data.results)
        setTrendingMovies(res.data.results)

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
    Axios.get(topMoviesURL)
      .then(res => {
        console.log(res.data.results)
        setTopMovies(res.data.results)
      })

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

      <MoviesCarousel moviesCarousel={homeMovies}  moviesCarouselName={'Popular'}/>
      <MoviesCarousel moviesCarousel={topMovies} moviesCarouselName={'Top Movies'}/>
      <MoviesCarousel moviesCarousel={trendingMovies} moviesCarouselName={'Trending Movies '}/>


      <h2>Fetured</h2>
      <Row className='d-flex'>
        {homeMovies.map((movie) => (

          <Link key={movie.id} to={`/movies/details/${movie.id}`} >

            <Card style={{ width: '16rem' }} className="bg-dark text-white">
              <Card.Img src={imagePath + movie.poster_path} alt="Card image" />
              {/* <Card.ImgOverlay>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay> */}

            </Card>
          </Link>
        ))}
      </Row>




    </>
  );
}

export default Home;
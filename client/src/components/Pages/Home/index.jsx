import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from '../../shared/Header'
import Banner from './Banner';
import SearchInput from '../../shared/SearchInput'

import MoviesCarousel from './MoviesCarousel';



const Home = () => {
  // const tmdbKey = '16de3d175c4180739924271ad90578a1'
  // const fetchURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`
  const fetchtbdbURL = `https://api.themoviedb.org/3/movie/popular?api_key=16de3d175c4180739924271ad90578a1&language=en-US&page=1`
  const topMoviesURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=16de3d175c4180739924271ad90578a1&language=en-US&page=1`
  const trendingMoviesURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=16de3d175c4180739924271ad90578a1`



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
  }, [trendingMoviesURL,fetchtbdbURL, topMoviesURL])


  return (
    <>

      <Banner title='Discover Movies' subTitle='' img='' />
      <Header>

      <SearchInput></SearchInput>
      </Header>
      
      <div className='ml-5'>


      <MoviesCarousel moviesCarousel={homeMovies} moviesCarouselName={'Popular'} />
      <MoviesCarousel moviesCarousel={topMovies} moviesCarouselName={'Top Movies'} />
      <MoviesCarousel moviesCarousel={trendingMovies} moviesCarouselName={'Trending Movies '} />
      </div>

    </>
  );
}

export default Home;
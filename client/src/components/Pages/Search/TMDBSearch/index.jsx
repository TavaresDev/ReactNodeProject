import Axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../../shared/Header'
import { NotificationContext } from '../../../shared/Notifications';

import { Container } from 'react-bootstrap';

import SearchCard from '../SearchCard';
import Loading from '../../../shared/Loading';


const TMDataFetching = () => {
    const [movies, setMovies] = useState([])
    const [movieInput, setMovieInput] = useState('')
    const [movieInputFromClick, setMovieInputFromClick] = useState('into the wild')
    const { setNotification } = useContext(NotificationContext);


    // const backdropImagePath = 'https://image.tmdb.org/t/p/w1280/'
    // const omdbURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`

    const posterImagePath = 'https://image.tmdb.org/t/p/w500/'
    const tmdbURL = `https://api.themoviedb.org/3/search/movie?api_key=16de3d175c4180739924271ad90578a1&language=en-US&query=${movieInputFromClick}&page=1&include_adult=false`

    useEffect(() => {
        Axios.get(tmdbURL)
            .then(res => {
                console.log(res)
                console.log(res.data.results)
                if (!res.data.results.length) {
                    setNotification({
                        type: "danger",
                        message: "Movie not found!"
                    });
                } else if (res.status === 200) {
                    setMovies(res.data.results)
            
                   
                } else {
                    setNotification({
                        type: "danger",
                        message: "Something is wrong!"
                    });
                   
                    // throw new Error('Movie not found!')
                }
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
    }, [movieInputFromClick, setNotification, tmdbURL])


    const handleClick = (e) => {
        e.preventDefault()
        setMovieInputFromClick(movieInput)
        // movies.map((movie, i) => {
        //   console.log(movie)
        // })
    }

    return (
        <>

            <Header title="Find Movies">
                <form>
                    <input value={movieInput} onChange={e => setMovieInput(e.target.value)} />
                    <button type="submit" onClick={handleClick} >Search</button>
                </form>
            </Header>


            <Container className='py-1'>


                {movies ? (
                    movies.map((movie, i) => (
                        <SearchCard key={i}
                            poster={movie.poster_path !== null ? posterImagePath + movie.poster_path : "https://via.placeholder.com/150"}
                            title={movie.title}
                            year={movie.release_date}
                            id={movie.id}
                            overview={movie.overview}
                        />
                    ))

                ) :  <Loading />}
                

            </Container>
        </>

    )
}

export default TMDataFetching

import Axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../../../shared/Header'
import { NotificationContext } from '../../../shared/Notifications';

import { Col, Container, Media, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchCard from '../SearchCard';
import Loading from '../../../shared/Loading';


const DataFetching = () => {
    const [movies, setMovies] = useState(null)
    const [movieInput, setMovieInput] = useState('')
    const [movieInputFromClick, setMovieInputFromClick] = useState('ass')
    const { setNotification } = useContext(NotificationContext);

    const omdbURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`
    // const tmdbURL = `https://api.themoviedb.org/3/search/movie?api_key=16de3d175c4180739924271ad90578a1&language=en-US&query=${movieInputFromClick}page=1&include_adult=false`

    useEffect(() => {
        Axios.get(omdbURL)
            .then(res => {
                console.log(res)
                // console.log(res.data)
                if (res.data.Response === "True") {
                    setMovies(res.data.Search)
                } else if (res.data.Error === "Too many results.") {
                    setNotification({
                        type: "danger",
                        message: "Too many results"
                    });
                    // throw new Error('Too many results.')
                } else if (res.data.Error === "Movie not found!") {
                    setNotification({
                        type: "danger",
                        message: "Movie not found!"
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
    }, [movieInputFromClick, setNotification, omdbURL])


    const handleClick = (e) => {
        e.preventDefault()
        setMovieInputFromClick(movieInput)
        // movies.map((movie, i) => {
        //   console.log(movie)
        // })
    }

    return (
        <>

            <Header title="Search your movies here">
                <form>
                    <input value={movieInput} onChange={e => setMovieInput(e.target.value)} />
                    <button type="submit" onClick={handleClick} >Search</button>
                </form>
            </Header>



            <Container>
                {movies ? (movies.map((movie, i) => (
                    <>
            {/* {console.log(movie)} */}

                    <SearchCard key={i} poster={movie.Poster} title={movie.Title} year={movie.Year} imdbID={movie.imdbID} overview='' />
                    </>
                ))

                ) : <Loading />}

            </Container>

        </>

    )
}

export default DataFetching

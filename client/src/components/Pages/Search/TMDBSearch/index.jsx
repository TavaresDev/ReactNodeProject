import Axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import Header from '../../../shared/Header'
import { NotificationContext } from '../../../shared/Notifications';

import { Col, Container, Media, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TMDataFetching = () => {
    const [movies, setMovies] = useState([])
    const [movieInput, setMovieInput] = useState('')
    const [movieInputFromClick, setMovieInputFromClick] = useState('ass')
    const { setNotification } = useContext(NotificationContext);

    const omdbURL = `https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`
    const tmdbURL = `https://api.themoviedb.org/3/search/movie?api_key=16de3d175c4180739924271ad90578a1&language=en-US&query=${movieInputFromClick}&page=1&include_adult=false`
   
    useEffect(() => {
        Axios.get(tmdbURL)
        .then(res => {
                console.log(res)
                console.log(res.data.results)
                setMovies(res.data.results)

            })
            .catch((err) => {
                if(err.response){
                    console.log("respo")
                }else if(err.request){
                    console.log("request")
                    console.log(err)
                }else{
                    console.log(err)

                }
            })
    },[])
    
    
    const handleClick = (e) => {
        e.preventDefault()
        setMovieInputFromClick(movieInput)
        // movies.map((movie, i) => {
        //   console.log(movie)
        // })
    }

    return (
            <>
            <Row>
                <Header title="Search your movies here">
                    <form>
                        <input value ={movieInput} onChange={e => setMovieInput(e.target.value)}/>
                        <button type="submit" onClick={handleClick} >Search</button>
                    </form>
                </Header>
            </Row>

            <Row>
            <Col md={9}>

            {movies ? (
                    movies.map((movie, i) => (
                        //meke it a component. how to pass data?
                        <Media key = {i}>

                            <img
                                src={movie.Poster != 'N/A' ? movie.Poster :"https://via.placeholder.com/150"}
                                alt={movie.Title}
                                width={300}
                                height={300}
                                className="mr-3"
                            />
                            <Media.Body>
                                <h5>{movie.title}</h5>
                                <p>
                                    <strong>Title:</strong>&nbsp;{movie.Title}
                                </p>
                                <p>
                                    <strong>Year:</strong>&nbsp;{movie.Year}
                                </p>           
                                <p>
                                    <strong>IMDB ID:</strong>&nbsp;{movie.imdbID}
                                </p>

                                <p>
                                    <Link to={`/movies/details/${movie.imdbID}`} > Movie details</Link>
                                </p>
                            </Media.Body>
                        </Media>
                    ))
          
                

            ) : null}
            </Col>
                <Col md ={3}>
                    <h1>here gos the list</h1>
                    <p>alshdasjn</p>
                    <p>alshdasjn</p>
                    <p>alshdasjn</p>
                    <p>alshdasjn</p>
                </Col>
                
  

            </Row>
        </>

    )
}

export default TMDataFetching

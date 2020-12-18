import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from '../../shared/Header'
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DataFetching = () => {
    const [movies, setMovies] = useState([])
    const [movieInput, setMovieInput] = useState(1)
    const [movieInputFromClick, setMovieInputFromClick] = useState()

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`)
            .then(res => {
                setMovies(res.data.Search)
                console.log(res.data.Search)
            })
            .catch(err => {
                console.log(err)
            })
    },[movieInputFromClick])
    
    const handleClick = () => {
        setMovieInputFromClick(movieInput)
        movies.map((movie, i) => {
          console.log(movie)
        })
    }

    return (
        movies ? (
            <>
            <Header title="Search your movies here">
                <input value ={movieInput} onChange={e => setMovieInput(e.target.value)}/>

                <button onClick={handleClick} >Search</button>
            </Header>

            <div>
                {
                    movies.map((movie, i) => (
                        <Media key = {i}>

                            <img
                                src={movie.Poster ? movie.Poster :"https://via.placeholder.com/150"}
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
                                    <strong>Director:</strong>&nbsp;{movie.Director}
                                </p>
            
                                <p>
                                    <strong>IMDB ID:</strong>&nbsp;{movie.imdbID}
                                </p>

                                <p>
                                    {/* <Link to={`/new/${id}`} > Add movie...</Link> */}
                                </p>
                            </Media.Body>
                        </Media>
                    ))
                }    
                
            </div>
        </>
    ): null
    )
}

export default DataFetching

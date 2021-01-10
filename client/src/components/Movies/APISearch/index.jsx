import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import Header from '../../shared/Header'
import { Container, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const DataFetching = () => {
    const [movies, setMovies] = useState([])
    const [movieInput, setMovieInput] = useState('')
    const [movieInputFromClick, setMovieInputFromClick] = useState('ass')

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?s=${movieInputFromClick}&type=movie&page=1&apikey=8a2a252`)
        .then(res => {
                console.log(res)
                console.log(res.data)

                if(res.data.Response === "True"){
                    setMovies(res.data.Search)
                }else if (res.data.Error == "Too many results."){
                    throw new Error('Too many results.')
                }else if(res.data.Error == "Movie not found!"){
                    throw new Error('Movie not found!')
                    // UI.showAlert("Sorry, Movie not found", "danger");

                }
            })
            .catch((err) => {
                if(err.response){
                    console.log("respo")
                }else if(err.request){
                    console.log("request")
                }else{
                    console.log(err)

                }
            })
    },[movieInputFromClick])
    
    
    const handleClick = () => {
        setMovieInputFromClick(movieInput)
        // movies.map((movie, i) => {
        //   console.log(movie)
        // })
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

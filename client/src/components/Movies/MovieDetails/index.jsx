import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Container, Media } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../shared/Header';
import MovieForm from '../MovieForm';

const MovieDetails = (props) => {
    const [imdbID, setImdbID] = useState("tt1250777")
    
    // const [inputs, setInputs] = useState({});
    const [movieData, setMovieData] = useState({});

    // const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=8a2a252`)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setMovieData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[imdbID])
  
    // useEffect(() => {
    // setInputs({...preloadData});
    // }, [preloadData])
    
  
    // const handleChange = event => {
    //   event.persist();
    //   setInputs({
    //     ...inputs,
    //     [event.target.name]: event.target.value
    //   });
    // };
  

    return (
        movieData ? (
            <>
              <Header title="Movie Complete details"/>
              
              <Container>
              <Media>
                <img
                src={movieData.Poster ? movieData.Poster :"https://via.placeholder.com/150"}
                width={150}
                height={150}
                className="mr-3"
                />
                <Media.Body>
                    <h5>{movieData.Title}</h5>
                    <p>
                        {/* <strong>Title:</strong>&nbsp;{movieData.Title} */}
                    </p>
                    <p>
                        <strong>Year:</strong>&nbsp;{movieData.Year}
                    </p>
                    
                    <p>
                        <strong>IMDB ID:</strong>&nbsp;{movieData.imdbID}
                    </p>
                    <p>
                        <strong>IMDB Rating:</strong>&nbsp;{movieData.imdbRating}
                    </p>
                    <p>
                        <strong>Plot:</strong>&nbsp;{movieData.Plot}
                    </p>
                    <p>
                        <strong>IMDB Votes:</strong>&nbsp;{movieData.imdbVotes}
                    </p>

                    <p>
                        <strong>Genre:</strong>&nbsp;{movieData.Genre}
                    </p>
                    <p>
                        <strong>Director:</strong>&nbsp;{movieData.Director}
                    </p>
           

                    <p>
                        {/* <Link to={`/movies/edit/${id}`} > Edit movie...</Link> */}
                    </p>
                </Media.Body>
            </Media>
         
      
                
            </Container>
            </>
          ) : null
    )
}

export default MovieDetails

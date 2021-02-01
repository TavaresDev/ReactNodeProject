import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Container, Media, Spinner,Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../shared/Header';
import Loading from '../../shared/Loading';
import MovieForm from '../MovieForm';

const MovieDetails = (props) => {

    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);
    const [preload, setPreload] = useState({});

    const omdbURL = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=8a2a252`
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
    const tmdbURL = `https://api.themoviedb.org/3/find/${id}?api_key=16de3d175c4180739924271ad90578a1&language=en-US&external_source=imdb_id`
    const tmdbURL2 = `https://api.themoviedb.org/3/movie/${id}?api_key=16de3d175c4180739924271ad90578a1&language=en-US&append_to_response=videos,watch/providers`


    useEffect(() => {
        Axios.get(tmdbURL2)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setMovieData(res.data)
                // setPreload(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    // useEffect(() => {
    // setInputs({...res.data});
    // }, [res.data])


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
                <Header title="Movie Complete details" />

                <Container>
                    <Media>
                        <img
                            src={movieData.poster_path ? imagePath + movieData.poster_path : "https://via.placeholder.com/150"}
                            width={350}
                            height={450}
                            className="mr-3"
                        />
                        <Media.Body>
                            <h5>{movieData.title}</h5>

                            <p>
                                <strong>Year:</strong>&nbsp;{movieData.release_date}
                            </p>

                            <p>
                                <strong>IMDB ID:</strong>&nbsp;{movieData.imdb_id}
                            </p>
                            <p>
                                <strong>Vote average:</strong>&nbsp;{movieData.vote_average}
                            </p>
                            <p>
                                <strong>Plot:</strong>&nbsp;{movieData.overview}
                            </p>
                            <p>
                                <strong> Votes:</strong>&nbsp;{movieData.vote_count}
                            </p>

                            <p>
                                <strong>Genre:</strong>&nbsp;{movieData.Genre}
                            </p>
                            <p>
                                <strong>Director:</strong>&nbsp;{movieData.Director}
                            </p>
                            <p>
                                <strong>Where to watch:</strong>&nbsp;{movieData.Director}
                            </p>


                            <p>
                                {/* <Link to={`/movies/edit/${id}`} > Edit movie...</Link> */}
                                {/* <Container>
                            <MovieForm endpoint="movies"
                            preloadData={ preload }/>
                        </Container> */}
                            </p>
                        </Media.Body>
                    </Media>



                </Container>
            </>
        ) : <Loading/>
    )
}

export default MovieDetails

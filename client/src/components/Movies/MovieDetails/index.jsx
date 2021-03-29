import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';
import { GlobalStoreContext } from '../../shared/Globals';
import { UserContext } from '../../Authentication/UserProvider'

import Loading from '../../shared/Loading';

import * as S from './styles'

const MovieDetails = () => {

    const { globalStore } = useContext(GlobalStoreContext);
    const { user, setUser } = useContext(UserContext);
    const { setNotification } = useContext(NotificationContext);

    const { id } = useParams();

    const [movieData, setMovieData] = useState(null);
    // const [watchMovieData, setWatchMovieData] = useState(null);
    // const [movieVideoKey, setMovieVideoKey] = useState(null);
    const [movieDataToApi, setMovieDataToApi] = useState({})

    // const omdbURL = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=8a2a252`
    const posterImagePath = 'https://image.tmdb.org/t/p/w500/'
    const backdropImagePath = 'https://image.tmdb.org/t/p/w1280/'

    const tmdbURL2 = `https://api.themoviedb.org/3/movie/${id}?api_key=16de3d175c4180739924271ad90578a1&language=en-US&append_to_response=videos,watch/providers`



    useEffect(() => {
        Axios.get(tmdbURL2)
            .then(res => {
                // console.log(res)
                console.log(res.data)
                setMovieData(res.data)


                //deal with providers
                // console.log(res.data)
                // console.log(res.data.videos.results[0])
                // setMovieVideoKey(res.data.videos.results[0].key)
                // setWatchMovieData(res.data[`watch/providers`])
                // console.log(watchMovieData.results.BR)

                setMovieDataToApi({
                    title: String(res.data.title),
                    year: Number(res.data.release_date.slice(0, 4)),
                    imdbID: String(res.data.imdb_id),
                    plot: String(res.data.overview),
                    poster: String(posterImagePath + res.data.poster_path),
                    rating: String(res.data.vote_average),

                })
                // console.log(movieSchema)
                // console.log(movieDataToApi)

            })
            .catch(err => {
                console.log(err)
            })
    }, [id, tmdbURL2])



    // const key = movieData.videos.results[0].key
    // console.log(key)
    // const key = movieData.videos
    // console.log(key)


    //make here then move this to a diferen component, mayber uper level
    const handleSaveMovie = async event => {
        event.preventDefault();
        console.log('savemovie')
        // console.log(movieDataToApi)
        if (movieDataToApi) {
            Axios.post(`${globalStore.REACT_APP_ENDPOINT}/movies`, {
                // ...inputs,
                ...movieDataToApi,
                secret_token: (user && user.token)
            })
                .then(({ data }) => {
                    if (data && data.token) setUser(data);
                    setNotification({
                        type: "success",
                        message: "This action was performed successfully."
                    });
                    // setRedirect(true);
                })
                .catch(error => {
                    console.error(error.message);

                    setNotification({
                        type: "danger",
                        message: `There was an issue performing this action: ${error.message}`
                    });
                });
        }
    };

    console.log(movieData)

    return (
        movieData ? (
            <S.DetailsWraper
                style={{
                    backgroundImage: `url(${backdropImagePath + movieData.backdrop_path})`,
                    // // backgroundPosition: 'center',
                    // backgroundColor: ' #464646',
                    // backgroundSize: 'cover',
                    // // width: '100%',
                    // minHeight: '16rem',
                }}
            >



                <header >
                    <div>
                        <h1>{movieData.tagline}</h1>

                        {/* <iframe title="movie video" width="560" height="315" src={`https://www.youtube.com/embed/${movieVideoKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                    </div>
                </header>
                <section>
                    <Container>
                        <Row>
                            <Col className='boxx' md={4} sm={3} xs={12}>

                                <img
                                    src={movieData.poster_path ? posterImagePath + movieData.poster_path : "https://via.placeholder.com/150"}
                                    width={'100%'}
                                    alt={movieData.title}
                                // height={450}
                                // className="mr-3"
                                />
                            </Col>
                            <Col md={8} sm={9} xs={12} className='boxx'>



                                <h2>{movieData.title} <span> ({movieData.release_date.slice(0, 4)})</span></h2>

                                <p>
                                    <strong>Genre:</strong>&nbsp;{movieData.genres.map((genre, index) => (
                                        <span key={index} className='mx-2'>

                                            {genre.name}
                                        </span>
                                    ))}
                                </p>

                                <p>
                                    <strong>IMDB ID:</strong>&nbsp;{movieData.imdb_id}
                                </p>
                                {/* <p>
                                <strong>Director:</strong>&nbsp;{movieData.Director}
                            </p> */}
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
                                    {/* <strong>Where to watch:</strong>&nbsp;{watchMovieData.results.us} */}

                                </p>
                                <div>
                                    <Button onClick={handleSaveMovie}>save movie</Button>
                                    {/* <Button onClick={makeDataFitAPI}>save</Button> */}
                                </div>


                                <p>
                                    {/* <Link to={`/movies/edit/${id}`} > Edit movie...</Link> */}
                                    {/* <Container>
                            <MovieForm endpoint="movies"
                            preloadData={ preload }/>
                        </Container> */}
                                </p>

                            </Col>
                        </Row>



                    </Container>
                </section>
                <footer/>

            </S.DetailsWraper>
        ) : <Loading />
    )
}

export default MovieDetails

import Axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Loading from '../../shared/Loading';

import * as S from './styles'

const MovieDetails = () => {

    const { id } = useParams();
    // const [preload, setPreload] = useState({});
    const [movieData, setMovieData] = useState(null);
    // const [watchMovieData, setWatchMovieData] = useState(null);
    const [movieKey, setMovieKey] = useState(null);

    // const omdbURL = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=8a2a252`
    const posterImagePath = 'https://image.tmdb.org/t/p/w500/'
    const backdropImagePath = 'https://image.tmdb.org/t/p/w1280/'
   
    const tmdbURL2 = `https://api.themoviedb.org/3/movie/${id}?api_key=16de3d175c4180739924271ad90578a1&language=en-US&append_to_response=videos,watch/providers`


    useEffect(() => {
        Axios.get(tmdbURL2)
            .then(res => {
                // console.log(res)
                setMovieData(res.data)
                // setPreload(res.data)
                console.log(res.data.videos)
                console.log(res.data.videos.results[0])
                setMovieKey(res.data.videos.results[0].key)

                // setWatchMovieData(res.data[`watch/providers`])

                // console.log(watchMovieData.results.BR)

            })
            .catch(err => {
                console.log(err)
            })
    }, [id, tmdbURL2])

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


    // const key = movieData.videos.results[0].key
    // console.log(key)
    // const key = movieData.videos
    // console.log(key)

    return (
        movieData ? (
            <S.DetailsWraper>
                <header style={{
                    backgroundImage: `url(${backdropImagePath + movieData.backdrop_path})`,
                    // backgroundPosition: 'center',
                    backgroundColor:' #464646',
                    backgroundSize: 'cover',
                    // width: '100%',
                    minHeight: '16rem',
                }}>
                    <div>

                    <h1>{movieData.tagline}</h1>


                    <iframe title="movie video" width="560" height="315" src={`https://www.youtube.com/embed/${movieKey}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    {/* <img
                                src={movieData.backdrop_path ? backdropImagePath + movieData.backdrop_path : "https://via.placeholder.com/150"}
                                width={'100%'}
                                maxWidth={350}
                                // height={450}
                                // className="mr-3"
                            /> */}

                            </div>
                </header>
                {/* <Header title="Movie Complete details" /> */}
                {/* header with video of movie */}

               <section>
                <Container>
                    <Row>
                        <Col className='boxx' md={4} sm={3} xs={12}>

                            <img
                                src={movieData.poster_path ? posterImagePath + movieData.poster_path : "https://via.placeholder.com/150"}
                                width={'100%'}
                                maxWidth={350}
                                alt={movieData.title}
                            // height={450}
                            // className="mr-3"
                            />
                        </Col>
                        <Col md={8} sm={9} xs={12} className='boxx'>



                            <h1>{movieData.title} <span> ({movieData.release_date.slice(0, 4)})</span></h1>

                            <p>
                                <strong>Genre:</strong>&nbsp;{movieData.genres.map((genre) => (
                                    <span className='mx-2'>

                                        { genre.name}
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
                            {/* <div>
                                <Button>save</Button>
                                <Button>save</Button>
                            </div> */}


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
            </S.DetailsWraper>
        ) : <Loading />
    )
}

export default MovieDetails

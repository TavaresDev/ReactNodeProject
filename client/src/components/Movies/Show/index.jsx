import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
// import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Show = (props) => {
  // const { movie } = useContext("5fd819f34e26707b3879bee7");
  const id = props.match.params.movieID;
  // const id ="5fd8428c5e70dd3bd4f4774f"
  const { globalStore } = useContext(GlobalStoreContext);
  const [movieDetails, setMovieDetails] = useState(null);
  //figure out hoe co cerrectly recive the movie ID
  // const [movieID, setMovieID] = useState("5fd819f34e26707b3879bee7");

  //need to get the movie UID to fetch from DB instead of user token
  useEffect(() => {
    console.log(id)
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/movies/${id}`)
    .then(({ data }) => {
      setMovieDetails(data);
      console.log(data)
    });
  }, []);

  return (
    movieDetails ? (
      <>
        <Header title="Your title for the Header component block">
          <p>
            This paragraph will be the value for <strong>&#123;children&#125;</strong> in the <strong>Header component</strong>.
          </p>

          <p>
            The header is editable under <strong>/src/components/Users/Show/index.jsx</strong>
          </p>
        </Header>

        <Container>
          <p>
            The content is editable under <strong>/src/components/Users/Show/index.jsx</strong>
          </p>

          <Media>
            <img
              src={movieDetails.poster ? movieDetails.poster :"https://via.placeholder.com/150"}
              width={150}
              height={150}
              className="mr-3"
            />
            <Media.Body>
              <h5>{movieDetails.title}</h5>
              <p>
                <strong>Title:</strong>&nbsp;{movieDetails.title}
              </p>
              <p>
                <strong>Year:</strong>&nbsp;{movieDetails.year}
              </p>
              <p>
                <strong>IMDB ID:</strong>&nbsp;{movieDetails.imdbID}
              </p>
              <p>
                <strong>IMDB ID:</strong>&nbsp;{movieDetails._id}
              </p>

              <p>
                <Link to={`/movies/edit/${id}`} > Edit movie...</Link>
              </p>
            </Media.Body>
          </Media>
        </Container>
      </>
    ) : null
  );
}
 
export default Show;
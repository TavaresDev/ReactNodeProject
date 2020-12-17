import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import MovieForm from '../MovieForm';

const Edit = (props) => {
  const { user } = useContext(UserContext);
  const [movieDetails, setMovieDetails] = useState(null);
  //figuere ou to pass movie id
  // const id = props.movieDetails.movieID
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`http://localhost:4000/movies/${id}`)
    .then(({ data }) => {
      setPreload(data);
      console.log(preload)
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the quote: ${error.message}`
      });
    });
  }, [ id ]);


  return (

    preload ? (
      <>
        <Header title="Edit Movie!"/>
        
        <Container>
          <p>
            The content is editable under <strong>/src/components/Users/Edit/index.jsx</strong>
          </p>

          <MovieForm
            preloadData={ preload }
            endpoint="movies/update"
            buttonLabel="Update Movie"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;
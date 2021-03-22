import Axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import MovieForm from '../MovieForm';

const Edit = () => {
  // const { user } = useContext(UserContext);
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  // const [preload, setPreload] = useState({});
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/movies/${id}`)
    .then(({ data }) => {
      // setPreload(data);
      setMovieDetails(data)
      console.log(data)
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the Movie: ${error.message}`
      });
    });
  }, [globalStore.REACT_APP_ENDPOINT, id ,setNotification]);


  return (

    movieDetails ? (
      <>
        <Header title="Edit Movie!"/>
        
        <Container>
          <p>
            The content is editable under <strong>/src/components/Users/Edit/index.jsx</strong>
          </p>

          <MovieForm
            preloadData={ movieDetails }
            endpoint="movies/update"
            buttonLabel="Update Movie"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;
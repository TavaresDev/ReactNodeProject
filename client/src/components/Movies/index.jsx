import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { Container, Table } from 'react-bootstrap';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';

const Movies = () => {
  const { globalStore } = useContext(GlobalStoreContext);
  const [movies, setMovies] = useState([]);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/movies`)
      .then(({ data }) => setMovies(data))
      .catch(error => {
        console.error(error.message);
        setNotification({
          type: "danger",
          message: "Couldn't access Movies at this time."
        });
      });
  }, [globalStore, setNotification]);

  return (
    movies ? (
      <>
        <Header title="Movie List">

        </Header>

        <Container className="my-3">
          <Table>
            <thead>
              <tr>
                <td>Movie</td>
                <td>Year</td>
                <td>Imdb</td>
                <td>ID</td>
              </tr>
            </thead>

            <tbody>
              {movies.map(({ title, year, _id, imdbID }, i) => (
                <tr key={i}>

                  <td>   <Link to={`/movies/${_id}`} >{title} </Link></td>
                  <td>{year}</td>
                  <td>{imdbID}</td>
                  <td>{_id}</td>



                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    ) : null
  );
}

export default Movies;
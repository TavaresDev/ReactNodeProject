import React, { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { GlobalStoreContext } from '../shared/Globals';
import { NotificationContext } from '../shared/Notifications';
import { Container, Table } from 'react-bootstrap';
import Header from '../shared/Header';

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
        <Header title="Your title for the Header component block">
          <p>
            This paragraph will be the value for <strong>&#123;children&#125;</strong> in the <strong>Header component</strong>.
          </p>

          <p>
            The header is editable under <strong>/src/components/Users/index.jsx</strong>
          </p>
        </Header>

        <Container className="my-3">
          <Table>
            <thead>
              <tr>
                <td>Movie</td>
                <td>Year</td>
              </tr>
            </thead>

            <tbody>
              {movies.map(({title, year}, i) => (
                <tr>
                  <td>{title}</td>
                  <td>{year}</td>
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
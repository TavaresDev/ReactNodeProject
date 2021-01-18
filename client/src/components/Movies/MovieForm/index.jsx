import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';
import { Redirect } from 'react-router-dom';

const MovieForm = ({ endpoint, preloadData = {}, buttonLabel }) => {
  const { globalStore } = useContext(GlobalStoreContext);    
  const { user, setUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const [redirect, setRedirect] = useState(false);
  
  const [inputs, setInputs] = useState({
    ...preloadData
  });



  const handleChange = event => {
    event.persist();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (inputs && inputs.title) {

      Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
        ...inputs,
        secret_token: (user && user.token)
      })
      .then(({ data }) => {
        console.log(data)
        if (data){
          setNotification({
            type: "success",
            message: "This action was performed successfully."
          });
        }
        setRedirect(true);
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

  return (
    redirect ? (
      <Redirect to="/Movies"/>
    ) : (
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            onChange={handleChange}
            required
            defaultValue={inputs.title}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            onChange={handleChange}
            required
            defaultValue={inputs.year}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>IMDB Id</Form.Label>
          <Form.Control
            name="imdbID"
            onChange={handleChange}
            defaultValue={inputs.imdbID}
          />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Director</Form.Label>
          <Form.Control
            name="director"
            onChange={handleChange}
            defaultValue={inputs.director}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Genre</Form.Label>
          <Form.Control
            name="genre"
            onChange={handleChange}
            defaultValue={inputs.genre}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Plot</Form.Label>
          <Form.Control
            name="plot"
            onChange={handleChange}
            defaultValue={inputs.plot}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Poster</Form.Label>
          <Form.Control
            name="poster"
            onChange={handleChange}
            defaultValue={inputs.poster}
          />
        </Form.Group>

  
        <Form.Group>
          <Button type="submit">{ buttonLabel || "Save Movie" }</Button>
        </Form.Group>
      </Form>
    )
  );
}
 
export default MovieForm;
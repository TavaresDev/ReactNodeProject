import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../../shared/Header';
import MovieForm from '../MovieForm';

const AddFromApi = (props) => {
    const [imdbID, setImdbID] = useState({})
    
    // const [inputs, setInputs] = useState({});
    const [preload, setPreload] = useState({});

    // const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        Axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=8a2a252`)
            .then(res => {
                console.log(res.data)
                setPreload(res.data)
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
        preload ? (
            <>
              <Header title="Create Movie from api data"/>
              
              
              <Container>
                <p>
                  The content is editable under <strong>/src/components/Users/Edit/index.jsx</strong>
                </p>
      
                <MovieForm
                  preloadData={ preload }
                  endpoint="movies/new"
                  buttonLabel="Create Movie from api"
                />
              </Container>
            </>
          ) : null
    )
}

export default AddFromApi

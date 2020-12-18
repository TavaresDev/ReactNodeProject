import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieForm from '../MovieForm';

const addFromApi = (props) => {
    
    // const [inputs, setInputs] = useState({});
    // const [preload, setPreload] = useState({});

    // const [redirect, setRedirect] = useState(false);
  
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
  

    // const handleSubmit = async event => {
    // //   event.preventDefault();
  
    // //   if (inputs && inputs.title) {
  
    // //     Axios.post(`${globalStore.REACT_APP_ENDPOINT}/${endpoint}`, {
    // //       ...inputs,
    // //       secret_token: (user && user.token)
    // //     })
    // //     .then(({ data }) => {
    // //       setNotification({
    // //         type: "success",
    // //         message: "This action was performed successfully."
    // //       });
  
    // //       setRedirect(true);
    // //     })
    // //     .catch(error => {
    // //       console.error(error.message);
  
    // //       setNotification({
    // //         type: "danger",
    // //         message: `There was an issue performing this action: ${error.message}`
    // //       });
    // //     });
    // //   }
    // };
    return (
        <div>
        {/* <MovieForm
            preloadData={ preload }
            endpoint="movies/new"
            buttonLabel="Update Movie"
          /> */}
        </div>
    )
}

export default addFromApi

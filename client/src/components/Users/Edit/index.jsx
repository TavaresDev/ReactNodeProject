import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';
import UserForm from '../UserForm';

const Edit = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, [user.token, globalStore.REACT_APP_ENDPOINT]);

  return (
    userDetails ? (
      <>
        <Header title="Edit your profile!"/>
        
        <Container>

          <UserForm
            preloadData={ userDetails }
            endpoint="users/update"
            buttonLabel="Update"
          />
        </Container>
      </>
    ) : null
  );
}
 
export default Edit;
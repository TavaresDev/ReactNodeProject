import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';

const NavLink = (props) => {
  // This function allows us to use React Router
  // with React Bootstrap. Booooya
    return (
    <Nav.Link
      href={props.href}
      onClick={e => {
        e.preventDefault();
        props.navigate(props.href);    
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/" component={NavLink}>
        <Navbar.Brand>Movie App</Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className='pl-1' >
        <Nav >
          {/* left nav */}
          {user && user.token ? (
              <>
                <Link to="/search" component={NavLink}>Search</Link>
                {/* <Link to="/movies" component={NavLink}>Movies</Link> */}
                <Link to="/new" component={NavLink}>Add Movie</Link>
              </>
            ) : (
              <>
              <Link to="/search" component={NavLink}>Search</Link>
                
              </>
            )}

            {/* <Link to="/" component={NavLink}>Home</Link> */}


        </Nav>
        <Nav className="ml-auto">

          {user && user.token ? (
            <>
              {/* <Link to="/users" component={NavLink}>Users</Link> */}
              <Link to="/profile" component={NavLink}>Profile</Link>
              {/* <Link to="/profile/edit" component={NavLink}>Edit Profile</Link> */}
              <Link to="/logout" component={NavLink}>Logout</Link>
              {/* //movies */}
            </>
          ) : (
            <>
              <Link to="/login" component={NavLink}>Login</Link>
              <Link to="/register" component={NavLink}>Register</Link>
            </>
          )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;
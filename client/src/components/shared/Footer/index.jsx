import React from 'react'
import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <Navbar bg="dark" variant="dark" >

            <Container className="text-center">
                <div>
                    <a rel="noreferrer" href="https://www.andretavares.dev/" target="_blank">
                        <h4 className='text-secondary'> Developed by Andre Tavares </h4>
                    </a> 
                </div>
                <div>
                    <p className=' h4 text-secondary'> Data from </p>
                    <img style={{ width: '5rem' }} src="/images/tmdb.svg" alt="" />
                    <p>"This product uses the TMDb API but is not endorsed or certified by TMDb."</p>
                </div>

            </Container>



        </Navbar>

    )
}

export default Footer

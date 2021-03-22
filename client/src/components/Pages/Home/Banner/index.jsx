import React from 'react'
import { Container } from 'react-bootstrap'
import * as Styles from './styles'

const Banner = (props) => {
    //add component logic here
    const {title, subTitle } = props

    try {
        if (!title) {
            throw new Error('You are missing a required attribute')
        }
        
        return (
            <Styles.Jumbotron fluid>
                <Container>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                    {/* <Image src={img} fluid /> */}
                </Container>
            </Styles.Jumbotron>

         )
        } 
    catch (error) {
        console.error(error.message)
        console.error(error.stack)

        return null;
    }

}

export default Banner

import React from 'react'
import { Link } from 'react-router-dom';
import * as Styles from './styles'

const CarouselCard = ({ imgSrc, movieid }) => {
    return (


        <Link to={`/movies/details/${movieid}`} >


            <Styles.ImageCard src={imgSrc} alt="Card image" />


        </Link>

    )
}

export default CarouselCard

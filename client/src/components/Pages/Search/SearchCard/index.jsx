import React from 'react'
import { Col, Container, Media, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Styles from './styles'

const SearchCard = ({ poster, title, year, imdbID, overview }) => {
    return (
        <Styles.Wraper >

            <Media className='p-3 my-3 shadow bg-light rounded'>

                <img
                    src={poster}
                    alt={title}
                    width={140}
                    height={200}
                    className="mr-3"
                />
                <div className="d-flex flex-column" style={{height:200}}>
                    <header>

                    <h5 className="mb-2">{title} ({year ? year.slice(0, 4): ''}) </h5>
                    </header>
      
                    <p className="flex-grow-1" style={{overflow:'hidden'}}>
                        {overview.substring(0, 150) + '...' }
                    </p>
                    {/* <p>
                        <strong>ID:</strong>&nbsp;{imdbID}
                    </p> */}

                    <p className=''>
                        <Link to={`/movies/details/${imdbID}`} > Movie details</Link>
                    </p>
                </div>
            </Media>
        </Styles.Wraper>
    )
}

export default SearchCard

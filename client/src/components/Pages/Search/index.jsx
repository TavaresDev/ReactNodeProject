import React from 'react'
import { Container } from 'react-bootstrap'
import DataFetching from './APISearch'
import TMDataFetching from './TMDBSearch'

const Search = () => {
    return (

        <>
            {/* <DataFetching /> */}
            <TMDataFetching/>
        </>


    )
}

export default Search

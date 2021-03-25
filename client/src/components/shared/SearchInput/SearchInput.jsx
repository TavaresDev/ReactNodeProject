import React, { useState } from 'react'

const SearchInput = () => {
    const [movieInput, setMovieInput] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(movieInput)
        // setMovieInputFromClick(movieInput)
        // movies.map((movie, i) => {
        //   console.log(movie)
        // })
    }
    return (
        <div>
            <form>
                <input value={movieInput} onChange={e => setMovieInput(e.target.value)} />
                <button type="submit" onClick={handleClick} >Search</button>
            </form>

        </div>
    )
}

export default SearchInput

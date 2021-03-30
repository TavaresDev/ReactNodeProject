import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, InputGroup, FormControl } from 'react-bootstrap';



const SearchInput = () => {
    const [movieInput, setMovieInput] = useState('')


    return (


        <InputGroup className="mb-3 m-auto" style={{ maxWidth: '60rem', textAlign: 'center' }}>
            <FormControl
                value={movieInput} onChange={e => setMovieInput(e.target.value)}
                placeholder="Search Movie"
                aria-label="Search Movie"

            />
            <InputGroup.Append>
                <Link to={`/search/${movieInput}`} >
                    <Button variant="primary" type="submit"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></Button>
                </Link>
            </InputGroup.Append>
        </InputGroup>

        // <div>
        //     <form>
        //         <input value={movieInput} onChange={e => setMovieInput(e.target.value)} />
        //         <Link to={`/search/${movieInput}`} >

        //         <button type="submit"  >Search</button>

        //         </Link>
        //     </form>

        // </div>
    )
}

export default SearchInput

import React from 'react'
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';


// https://www.npmjs.com/package/react-alice-carousel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// const responsive = {
// 	0: { items: 1 },
// 	668: { items: 4 },
// 	1024: { items: 5 },
// }

const MoviesCarousel = ({ moviesCarousel, moviesCarouselName }) => {
    const imagePath = 'https://image.tmdb.org/t/p/w500/'

    const items = moviesCarousel.map((movie) => (
        <Link key={movie.id} to={`/movies/details/${movie.id}`} >
        {/* <Card style={{ width: '5rem' }} className="bg-dark text-white"> */}
            <Card.Img style={{ width: '14rem' }} src={imagePath + movie.poster_path} alt="Card image" />

        {/* </Card> */}
        </Link>
    ))

    // const numMovies = (moviesCarousel.length -4)
    // const [activeIndex, setActiveIndex] = useState(0);

    // const slidePrev = () => {
    //     if(activeIndex > 0 && activeIndex <= numMovies )
    //     setActiveIndex(activeIndex - 1)
    // }
    // const slideNext = () => {
    //     if(activeIndex < numMovies )
    //     setActiveIndex(activeIndex + 1)
    // }

    // const onSlideChanged = ({ item }) => setActiveIndex(item);

    return (
        <div className="mt-5">
            <div className="m-3">

                <h2>{moviesCarouselName}</h2>
            </div>

            <AliceCarousel disableButtonsControls 
                mouseTracking
                // infinite
                // responsive={responsive}
                // onSlideChanged={onSlideChanged}
                // activeIndex={activeIndex}
                autoWidth  
                items={items} />
                
            {/* <div className="b-refs-buttons">
                <button onClick={slidePrev}>Prev</button>
                <button onClick={slideNext}>Next</button>
                {activeIndex}
                {numMovies}
            </div> */}

        </div>
    )
}

export default MoviesCarousel

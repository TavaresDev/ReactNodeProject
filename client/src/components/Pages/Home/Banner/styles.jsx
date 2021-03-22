import styled from 'styled-components'

// styled-components -  this syntax export a default object
// const img = 'https://via.placeholder.com/1200x600'
export default {

    Jumbotron:styled.div`
        background-color: #000;
        /* background-position: center center, center top; */
        /* background-repeat: repeat, no-repeat; */
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("/images/imgCinema.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        /* width: 2000px; */
        height: 80vh;
        /* height: 1200px; */
        
            h1{
                text-align: center;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            }
            h2{
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            
            }
            /* .banner--fadeBottom{
        height: 7.4rem;
        background-image: linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111);
    } */


`
}
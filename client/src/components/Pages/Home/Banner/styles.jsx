import styled from 'styled-components'

// styled-components -  this syntax export a default object
// const img = 'https://via.placeholder.com/1200x600'

export const Jumbotron = styled.div`
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
export const Hero = styled.div`


	height: 100vh;
	background: linear-gradient(45deg, rgba(255,175,189,.7), rgba(100,216,243,.7), rgba(234,236,198,.7), rgba(245,146,176,.7), rgba(52,219,216,.7)) 0 0 / 1000% no-repeat, url('https://picsum.photos/g/2000/1200?image=443') 0 0 / cover no-repeat;
	-webkit-animation: gradientAnimation 40s ease infinite;
	animation: gradientAnimation 40s ease infinite;
    
    @-webkit-keyframes gradientAnimation {
	0%   { background-position: 0% 30%, 0 0;}
	50%  { background-position: 100% 70%, 0 0;}
	100% { background-position: 0% 30%, 0 0;}
}
@keyframes gradientAnimation {
	0%   { background-position: 0% 30%, 0 0;}
	50%  { background-position: 100% 70%, 0 0;}
	100% { background-position: 0% 30%, 0 0;}
}


    h1 {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	color: #fff;
	font : normal 600 72px/1 'Open Sans', sans-serif;
	text-align: center;
	white-space: nowrap;
}
h1 span {
	display: block;
	margin-top: 1em;
	font-size: 40px;
	font-weight: 300;
}

`

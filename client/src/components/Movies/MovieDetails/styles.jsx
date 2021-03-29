import styled from "styled-components"

// styled-components -  this syntax export a default object

export const DetailsWraper = styled.div`
	background-color: #464646;

	/* background: no-repeat center center fixed;  */
	background: no-repeat center center;

	background-size: cover;

	header {
		display: flex;
		align-items: center;
		justify-content: center;

		/* color:#fff */
		min-height: 8rem;
	}

	header > div > h1 {
		font-weight: 700 !important;
		font-family: "Roboto", sans-serif;
		padding: 0.4rem;
		border-radius: 10px;
		background-color: rgba(150, 150, 160, 0.8);
	}
	section {
		color: #fff;
		/* background-color: #000; */
		padding: 2rem 0;
		/* height: 90vh; */
		background-color: rgba(15, 15, 20, 0.92);
		/* margin-bottom:8rem; */
	}
	footer {
		min-height: 8rem;
	}

	.box {
		border: red 1px solid;
	}

	/* 
            h2{
                text-align: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
            
            } */
`

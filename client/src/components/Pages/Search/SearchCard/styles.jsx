import styled from "styled-components"

export const Wraper = styled.div`
	background: #e0e5eb;

	/* 2dp */
	box-shadow: 0px 1.27357px 2.54713px rgba(0, 0, 0, 0.14),
		0px 1.91035px 2.54713px rgba(0, 0, 0, 0.12),
		0px 0.636783px 3.18391px rgba(0, 0, 0, 0.2);
	border-radius: 3px;

	header {
		/* display:flex;
            align-items:center;
            justify-content:center; */

		/* color:#fff */
	}
	header > div {
		background-color: rgba(200, 200, 200, 0.8);
	}
	section {
		/* background-color: #000; */
		margin: 2rem 0;
		height: 90vh;
	}

	.box {
		border: red 1px solid;
	}
`

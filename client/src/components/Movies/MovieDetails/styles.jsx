import styled from 'styled-components'

// styled-components -  this syntax export a default object

export default {


    div: styled.div`
       
        header{
            display:flex;
            align-items:center;
            justify-content:center;
            /* color:#fff */
        }
        header > div {
            background-color:rgba(200, 200, 200,0.8)
        }
        section {
            /* background-color: #000; */
            margin: 2rem 0;
            height: 90vh;

        }

        .box {
            border:red 1px solid ;
           
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
}
import styled from 'styled-components'

const Card = styled.article`
    width: 80vw;
    max-width: 450px;
    min-height: 370px;

    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;

    border-radius: 40px;
    background-color: #fff;
    box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);
    position: relative; /*For .readmore positioning*/
    margin: 20px; /*For space in between on desktop*/

    .readMore {
        color: rgb(0, 0, 254);
        position: absolute;
        bottom: 20px;
        right: 50px;
    }

    article > h2 {
        color: red;
    }

    @media (min-width: 1224px) {
        .blog {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 0;
        }

        .content {
            width: 80vw;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: 10px;
        }

        .content h1 {
            margin-top: 10px;
        }
    }
`

export default Card

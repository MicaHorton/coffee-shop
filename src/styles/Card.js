import styled, { css } from 'styled-components'

const Card = styled.article`
    width: 90vw;
    padding: 30px 60px 40px;
    margin: 30px;
    position: relative;

    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);

    color: #83818c;
    font-size: 20px;
    bottom: 0%;

    h1,
    h2 {
        font-size: 30px;
        color: black;
    }

    @media (min-width: 1224px) {
        width: 65vw;
    }

    ${props =>
        props.size === 'box' &&
        css`
            max-width: 450px;
            min-height: 370px;
        `}
`

export default Card

/*

 .read-more {
        color: rgb(0, 0, 254);
        position: absolute;
        bottom: 20px;
        right: 50px;
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
*/

import styled from 'styled-components'

const Menu = styled.nav`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    width: 90vw;
    max-width: 430px;
    margin-top: 10px;

    position: relative;
    overflow: hidden;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);

    a {
        color: #83818c;
        padding: 20px;
        text-decoration: none;
        transition: 0.3s;

        z-index: 1;
        font-family: 'DM Sans', sans-serif;
        font-weight: 500;
        position: relative;
        font-size: 18px;
    }
`
export default Menu

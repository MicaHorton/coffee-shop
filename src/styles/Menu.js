import styled, { css } from 'styled-components'

export const Menu = styled.nav`
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
        text-decoration: none;
        color: #83818c;
    }
`

export const MenuItem = styled.span`
    padding: 20px;
    position: relative;
    font-size: 18px;

    :before {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #dfe2ea;
        border-radius: 8px 8px 0 0;
        opacity: 0;
        transition: 0.3s;
    }

    ${props =>
        props.active &&
        css`
            a {
                color: ${props => props.color};
            }

            :before {
                opacity: 1;
                bottom: 0;
                background-color: ${props => props.color};
            }
        `}
`

export const MenuIndicator = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.4s;
    height: 5px;
    z-index: 1;
    border-radius: 8px 8px 0 0;
`

import styled from "styled-components";

export const HeaderContainer = styled.header`
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: baseline;
    padding-left: 40px;
    padding-top: 15px;

    nav{
        display: flex;
    }

    ul{
        display: flex;
        list-style-type: none;
        gap: 32px;
    }

    a{
        font-family: 'Montserrat', sans-serif;
        font-size: 0.75rem;
        text-decoration: none;
        color: ${(props) => props.theme['black-100']};
        cursor: pointer;
    }

    a:hover{
        font-weight: bold;
        border-bottom: 2px solid ${(props) => props.theme['black-100']};
    }

`

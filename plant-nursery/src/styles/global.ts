import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;    
        padding: 0;
    }

    html, body{
        background-image: url('../../src/assets/background.png');
        overflow-x: hidden;
    }

`;
import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 30px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    p {
        margin: 0;
    }
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --fontTitle: 'Montserrat', sans-serif;
        --fontSubtitle: 'Istok Web', sans-serif;
        --fontText: 'Roboto', sans-serif;
        --fontSize12: 1.2rem;
        --fontSize14: 1.4rem;
        --fontSize16: 1.6rem;
        --fontSize18: 1.8rem;
        --colorMain: #00538A;
        --colorHover: #004070;
        --colorActive: #003056;
        --colorText: #393b44;
        /* --colorMain: #EC7C26; */
        /* --colorText: #595959; */
    }
`;

export default GlobalStyles;

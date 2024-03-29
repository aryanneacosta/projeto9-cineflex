import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        --cor-fundo: #E5E5E5;
        --cinza: #C3CFD9;
        --cinza-borda: #808F9D;
        --laranja: #E8833A;
        --texto: #293845;
        --branco: #FFFFFF;
        --footer: #DFE6ED;
        --footer-borda: #9EADBA;
        --seats-texto: #4E5A65;
        --selected: #8DD7CF;
        --selected-borda: #1AAE9E;
        --available: #C3CFD9;
        --available-borda: #7B8B99;
        --unavailable: #FBE192;
        --unavailable-borda: #F7C52B;
        text-decoration: none;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
    }
/* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }
    body {
	    line-height: 1;
    }
    ol, ul {
	    list-style: none;
    }
    blockquote, q {
	    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
	    content: '';
	    content: none;
    }
    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }
`;

export default GlobalStyle;
import styled from "styled-components";

export default function Header() {
    return (
        <Head>CINEFLEX</Head>
    );
}

const Head = styled.header`
    height: 68px;
    width: 100%;
    background-color: var(--cinza);
    color: var(--laranja);
    font-family: 'Roboto';
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px var(--cinza-borda);
`
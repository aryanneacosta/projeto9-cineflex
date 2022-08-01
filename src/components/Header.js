import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({ page }) {
    const navigate = useNavigate();

    if (page === "") {
        return (
            <Head>
                <HeadTitle>CINEFLEX</HeadTitle>
            </Head>
        )
    } else {
        return (
            <Head>
                <ion-icon 
                    name="chevron-back-outline"
                    onClick={() => navigate(`${page}`)}
                ></ion-icon>
                <HeadTitle>CINEFLEX</HeadTitle>
            </Head>
        )
    }

}

const Head = styled.div`
    height: 68px;
    width: 100%;
    background-color: var(--cinza);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px var(--cinza-borda);
    position: fixed;
    left: 0;
    top: 0;

    ion-icon[name="chevron-back-outline"] {
        height: 35px;
        width: 35px;
        color: var(--laranja);
        position: fixed;
        left: 0;
        top: 1;
        margin-left: 10px;
    }
`;

const HeadTitle = styled.header`
    color: var(--laranja);
    font-family: 'Roboto';
    font-size: 34px;

`
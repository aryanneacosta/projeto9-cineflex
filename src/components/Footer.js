import styled from "styled-components";

export default function Footer({ title, posterURL, day, time }) {
    console.log(title, posterURL, day, time)
    return (
        <Bottom>
            <Poster>
                <img src={posterURL} alt={title} />
            </Poster>
            <Info>
                <div>{title}</div>
                <div>{day} - {time}</div>
            </Info>
        </Bottom>
    );
}

const Bottom = styled.footer`
    height: 118px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: var(--footer);
    border: 1px solid var(--footer-borda);
    display: flex;
    align-items: center;
`;

const Poster = styled.div`
    height: 90px;
    width: 64px;
    background-color: var(--branco);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-left: 10px;

    img {
        height: 72px;
        width: 48px;
    }
`;

const Info = styled.div`
    color: var(--texto);
    font-size: 26px;
    font-family: 'Roboto';
    margin-left: 14px;
`;
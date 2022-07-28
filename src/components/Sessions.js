import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Sessions() {
    const params = useParams();
    const [sessions, setSessions] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${params.idFilme}/showtimes`
        );
        promise.then((resposta) => {
            setSessions(resposta.data);
            setDays(resposta.data.days);
        });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Top>Selecione o horário</Top>

                {days.map((days, index) =>
                    <SessionDay key={index}>
                        <SessionDate>{days.weekday} - {days.date}</SessionDate>
                        <Showtimes>
                            <Link to={`/assentos/${days.showtimes[0].id}`}>
                            <div>{days.showtimes[0].name}</div>
                            </Link>
                            <Link to={`/assentos/${days.showtimes[1].id}`}>
                            <div>{days.showtimes[1].name}</div>
                            </Link>
                        </Showtimes>
                    </SessionDay>
                )}
            </Container>

            <Footer
                title={sessions.title}
                posterURL={sessions.posterURL}
            />
        </>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--cor-fundo);
    margin-top: 68px;
    margin-bottom: 118px;
    padding-bottom: 20px;
`;

const Top = styled.div`
    height: 110px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--texto);
    font-size: 24px;
    font-family: 'Roboto';
`;

const SessionDay = styled.div`
    margin-left: 24px;
`;

const SessionDate = styled.div`
    color: var(--texto);
    font-size: 20px;
    font-family: 'Roboto';
    margin-bottom: 22px;
`;

const Showtimes = styled.div`
    display: flex;
    margin-bottom: 24px;

    div {
        height: 42px;
        width: 82px;
        background-color: var(--laranja);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--branco);
        font-size: 18px;
        font-family: 'Roboto';
        margin-right: 8px;
        
    }

`;
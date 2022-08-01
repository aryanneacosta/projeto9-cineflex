import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(
            'https://mock-api.driven.com.br/api/v7/cineflex/movies'
        );
        promise.then(resposta => {
            setMovies(resposta.data);
        });
    }, []);

    return (
        <>
            <Header />
            <Container>
                <Top>Selecione o filme</Top>
                <div>
                    {movies.map((movies, index) =>
                        <Link to={`/sessoes/${movies.id}`}>
                            <Poster key={index}>
                                <img
                                    src={movies.posterURL}
                                    alt={movies.id} 
                                />
                            </Poster>
                        </Link>
                    )}
                </div>
            </Container>
        </>
    );
}

const Container = styled.div`
    background-color: var(--cor-fundo);
    height: 100%;
    margin-top: 68px;

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
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
`

const Poster = styled.div`
    height: 210px;
    width: 145px;
    background-color: var(--branco);
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
        height: 194px;
        width: 130px;
    }
`
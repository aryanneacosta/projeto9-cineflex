import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Seat from "./Seat";

export default function Seats({ info }) {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [movieInfo, setMovieInfo] = useState(null);
    const [seat, setSeat] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [form, setForm] = useState({ nome: '', cpf: '' });

    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((resposta) => {
            setMovieInfo(resposta.data);
            setSeat(resposta.data.seats);
        });
    }, []);

    function selectedSeat(id, seat) {
        const selected = selectedSeats.some(seats => seats.id === id);
        if (!selected) {
            setSelectedSeats([...selectedSeats, { id, seat }]);
        } else {
            const unselected = selectedSeats.filter(seats => seats.id !== id);
            setSelectedSeats(unselected);
        }
    }

    function seats() {
        return seat.map(seat => {
            const { id, name, isAvailable } = seat;
            const selected = selectedSeats.some(seats => seats.id === id)
            return (
                <Seat
                    seat={name}
                    id={id}
                    isAvailable={isAvailable}
                    selected={selected}
                    selecting={(id, seat) => selectedSeat(id, seat)}
                    key={id}
                />
            );
        });
    }

    function footer() {
        if (movieInfo !== null) {
            return (
                <Footer
                    title={movieInfo.movie.title}
                    posterURL={movieInfo.movie.posterURL}
                    day={movieInfo.day.date}
                    time={movieInfo.name}
                />
            )
        } 
    }

    function buyTickets(event) {
        event.preventDefault();
        const promise = axios.post(
            `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, {
                ids: selectedSeats.map(seat => seat.id),
                name: form.nome,
                cpf: form.cpf
            });
        
        promise.then(resposta => {
            info({
                idSession: movieInfo.id,
                title: movieInfo.movie.title,
                day: movieInfo.day.weekday,
                time: movieInfo.name,
                seats: selectedSeats,
                buyer: form
            });
            navigate('/sucesso');
        });
    }

    function header() {
        if (movieInfo !== null) {
            return (
                <Header page={`/sessoes/${movieInfo.movie.id}`}/>
            )
        }
    }

    return (
        <>
            {header()}
            <Container>
                <Top>Selecione o(s) assento(s)</Top>
                <SeatsContainer>
                    <NumberedSeats>
                        {seats()}
                    </NumberedSeats>
                    <Options>
                        <Option>
                            <Selected></Selected>
                            <div>Selecionado</div>
                        </Option>
                        <Option>
                            <Available></Available>
                            <div>Disponível</div>
                        </Option>
                        <Option>
                            <Unavailable></Unavailable>
                            <div>Indisponível</div>
                        </Option>
                    </Options>
                </SeatsContainer>
                <Input>
                    <form onSubmit={buyTickets}>
                        <div>Nome do comprador:</div>
                        <input
                            type={'text'}
                            name={'nome'}
                            value={form.nome}
                            placeholder='Digite seu nome...'
                            required
                            onChange={e => setForm({...form, nome: e.target.value})}
                        />
                        <div>CPF do comprador:</div>
                        <input
                            type={'number'}
                            name={'cpf'}
                            value={form.cpf}
                            placeholder='Digite seu CPF...'
                            required
                            onChange={e => setForm({...form, cpf: e.target.value})}
                        />
                        <button type="submit">Reservar assento(s)</button>
                    </form>
                </Input>
            </Container>
            {footer()}
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

const SeatsContainer = styled.div`
    margin-bottom: 42px;
`;

const NumberedSeats = styled.div`
    height: 204px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
`;

const Options = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Option = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
       font-size : 13px;
       font-family: 'Roboto';
       color: var(--seats-texto);
       margin-top: 8px;
    }
`;

const Selected = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--selected);
    border: 1px solid var(--selected-borda);
`;

const Available = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--available);
    border: 1px solid var(--available-borda);
`;

const Unavailable = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: var(--unavailable);
    border: 1px solid var(--unavailable-borda);
`;

const Input = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    form {
        width: 327px;
        display: flex;
        flex-direction: column;
    }

    div {
        font-size: 18px;
        font-family: 'Roboto';
        color: var(--texto);
    }

    input {
        height: 51px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: 'Roboto';
        font-style: italic;
        border-radius: 6px;
        border: 1px solid #d4d4d4;
        margin-bottom: 7px;
    }

    button {
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--laranja);
        border-radius: 3px;
        color: var(--branco);
        font-size: 18px;
        font-family: 'Roboto';
        border: 1px solid var(--laranja);
        margin-top: 57px;
    }
`;

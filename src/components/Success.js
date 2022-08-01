import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function Success({ concluded }) {
    const { title, day, time, seats, buyer } = concluded;

    return (
        <>
            <Header />
            <Container>
                <Top>
                    <div>Pedido feito</div>
                    <div>com sucesso!</div>
                </Top>
                <div>
                    <Title>Filme e sessão</Title>
                    <Info>{title}</Info>
                    <Info>{day} {time}</Info>
                </div>
                <div>
                    <Title>Ingressos</Title>
                    {seats.map(({ seat }) => {
                        return <Info>Assento {seat}</Info>
                    })}
                </div>
                <div>
                    <Title>Comprador</Title>
                    <Info>Nome: {buyer.nome}</Info>
                    <Info>CPF: {buyer.cpf}</Info>
                </div>
                <Button>
                    <Link to={`/`}>
                        <div>Voltar pra Home</div>
                    </Link>
                </Button>
            </Container>
        </>
    );
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--cor-fundo);
    margin-top: 68px;
    margin-bottom: 118px;
    padding-bottom: 100px;
`;

const Top = styled.div`
    height: 110px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #247A6B;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    font-family: 'Roboto';
    color: var(--texto);
    margin-left: 28px;
    margin-top: 16px;
`;

const Info = styled.div`
    font-size: 22px;
    font-family: 'Roboto';
    color: var(--texto);
    margin-left: 28px;
`;

const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        height: 42px;
        width: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--laranja);
        border-radius: 3px;
        color: var(--branco);
        font-size: 18px;
        font-family: 'Roboto';
        border: 1px solid var(--laranja);
        margin-top: 62px;
    }
`;
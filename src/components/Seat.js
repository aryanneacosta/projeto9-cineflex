import styled from "styled-components";

export default function Seat({ seat, id, isAvailable, selected, selecting }) {

    function selectingSeat() {
        if (!isAvailable) {
            return (alert("Esse assento não está disponível"));
        } else {
            selecting(id, seat);
        }
    }

    return (
        <>
                <SingleSeat
                    isAvailable={isAvailable}
                    selected={selected}
                    onClick={selectingSeat}
                >{seat}</SingleSeat>
        </>
    );
}

function seatColor(selected, isAvailable) {
    if (selected) {
        return ('#8DD7CF');
    } else if (isAvailable) {
        return('#C3CFD9');
    } else {
        return ('#FBE192');
    }
}

function borderColor(selected, isAvailable) {
    if (selected) {
        return ('#1AAE9E');
    } else if (isAvailable) {
        return('#7B8B99');
    } else {
        return ('#F7C52B');
    }
}

const SingleSeat = styled.div`
    height: 26px;
    width: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 11px;
    font-family: 'Roboto';
    border-radius: 50%;
    background-color: ${({ selected, isAvailable }) => seatColor(selected, isAvailable)};
    border: 1px solid ${({ selected, isAvailable }) => borderColor(selected, isAvailable)};;
    margin-right: 6px;
`;

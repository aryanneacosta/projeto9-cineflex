import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import Home from "./components/Home";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Success from "./components/Success";

function App() {
    const [concluded, setConcluded] = useState([]);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sessoes/:idFilme' element={<Sessions />} />
                    <Route path='/assentos/:idSessao' element={<Seats info={concluded => setConcluded(concluded)} />} />
                    <Route path='/sucesso' element={<Success concluded={concluded} />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

ReactDOM.render(<App />, document.querySelector('.root'));
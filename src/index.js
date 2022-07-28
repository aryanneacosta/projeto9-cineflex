import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/globalStyles";
import Home from "./components/Home";
import Seats from "./components/Seats";
import Sessions from "./components/Sessions";
import Success from "./components/Success";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/sessoes/:idFilme' element={<Sessions />} />
                    <Route path='/assentos/:idSessao' element={<Seats />} />
                    <Route path='/sucesso' element={<Success />} />
                </Routes>
            </BrowserRouter>
        </>

    );
}

ReactDOM.render(<App />, document.querySelector('.root'));
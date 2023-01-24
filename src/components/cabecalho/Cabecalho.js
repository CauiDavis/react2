import React from "react";
import Styled from "../Styled";
import { Link } from "react-router-dom"
function Cabecalho() {
    return (
        <Styled>
            <div>
                <img src="images/capa.png" alt="capa" />
            </div><header id="menu">
                <Link to="/">Home</Link> |
                <Link to="/Biografia">Biografia</Link> |
                <Link to="/Campanhas">Campanhas publicitários</Link> |
                <Link to="/Contatos">Contatos</Link>
            </header>
        </Styled>
    );
}
export default Cabecalho;
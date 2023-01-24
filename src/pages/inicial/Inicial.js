import React from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Principal1 from "../../components/principal1/Principal1";
import Rodape from "../../components/rodape/Rodape";

function Inicial(){
    return (
        <React.Fragment>
        <Cabecalho/>
        <Principal1/>
        <Rodape/>
        </React.Fragment>
    );
}
export default Inicial;
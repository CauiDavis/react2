import Cabecalho from "../../components/cabecalho/Cabecalho";
import React from "react";
import Principal2 from "../../components/principal2/Principal2";
import Rodape from "../../components/rodape/Rodape";


function Biografia(){
    return (
        <React.Fragment>
            <Cabecalho/>
            <Principal2/>
            <Rodape/>
        </React.Fragment>
    );
}
export default Biografia;
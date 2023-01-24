import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Biografia from "./pages/biografia/Biografia";
import Campanhas from "./pages/campanhas/Campanhas";
import Contatos from "./pages/contatos/Contatos";
import Inicial from "./pages/inicial/Inicial";
function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Inicial />} />
                <Route path="/Biografia" element={<Biografia />} />
                <Route path="/Campanhas" element={<Campanhas />} />
                <Route path="/Contatos" element={<Contatos />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rotas;
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "../context/Context";

import Home from "../pages/Home";
import ProfesionForm from "../pages/ProfesionForm";
import BarrioForm from "../pages/BarrioForm";
import CiudadForm from "../pages/CiudadForm";
import FuncionarioForm from "../pages/FuncionarioForm";
import ClienteForm from "../pages/ClienteForm";
import PageProfesion from "../pages/PageProfesion";
import PageBarrio from "../pages/PageBarrio";
import PageCiudad from "../pages/PageCiudad";
import PageFuncionario from "../pages/PageFuncionario";
import PageCliente from "../pages/PageCliente";
import NotFound from "../pages/NotFound";
import Nar from "../components/Nar";



function App() {
  return (

    <ContextProvider>
      <Nar />

      <Routes>
        <Route path="/profesiones" element={<PageProfesion />} />
        <Route path="/Barrios" element={<PageBarrio />} />
        <Route path="/Ciudades" element={<PageCiudad />} />
        <Route path="/Funcionarios" element={<PageFuncionario />} />
        <Route path="/Clientes" element={<PageCliente />} />
        <Route path="/profesiones/new" element={<ProfesionForm />} />
        <Route path="/profesiones/:id" element={<ProfesionForm />} />
        <Route path="/Barrios/new" element={<BarrioForm />} />
        <Route path="/Barrios/:id" element={<BarrioForm />} />
        <Route path="/Ciudades/new" element={<CiudadForm />} />
        <Route path="/Ciudades/:id" element={<CiudadForm />} />
        <Route path="/Funcionarios/new" element={<FuncionarioForm />} />
        <Route path="/Funcionarios/:id" element={<FuncionarioForm />} />
        <Route path="/Clientes/new" element={<ClienteForm />} />
        <Route path="/Clientes/:id" element={<ClienteForm />} />
        
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextProvider>

  );
}

export default App;

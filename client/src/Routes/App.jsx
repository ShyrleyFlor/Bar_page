import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "../context/Context";

import Home from "../pages/Home";
import ProfesionForm from "../pages/ProfesionForm";
import BarrioForm from "../pages/BarrioForm";
import CiudadForm from "../pages/CiudadForm";
import PageProfesion from "../pages/PageProfesion";
import PageBarrio from "../pages/PageBarrio";
import PageCiudad from "../pages/PageCiudad";
import NotFound from "../pages/NotFound";
import Nar from "../components/Nar";

function App() {
  return (
    //<ProfesionContextProvider>
    //<CiudadContextProvider>
    //<BarrioContextProvider>
    <ContextProvider>
      <Nar />

      <Routes>
        <Route path="/profesiones" element={<PageProfesion />} />
        <Route path="/Barrios" element={<PageBarrio />} />
        <Route path="/Ciudades" element={<PageCiudad />} />
        <Route path="/profesiones/new" element={<ProfesionForm />} />
        <Route path="/profesiones/:id" element={<ProfesionForm />} />
        <Route path="/Barrios/new" element={<BarrioForm />} />
        <Route path="/Barrios/:id" element={<BarrioForm />} />
        <Route path="/Ciudades/new" element={<CiudadForm />} />
        <Route path="/Ciudades/:id" element={<CiudadForm />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextProvider>
    //</BarrioContextProvider>
    //</CiudadContextProvider>
    // </ProfesionContextProvider>
  );
}

export default App;

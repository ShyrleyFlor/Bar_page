 
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

        

import Home from "./pages/Home";
import ProfesionForm from "./pages/ProfesionForm";
import PageProfesion from "./pages/PageProfesion";
import NotFound from "./pages/NotFound";



function App() {


  return (

      <div>
        <Navbar />
          <Routes>
          <Route path="/profesiones" element={<PageProfesion />} />
          <Route path="/profesiones/new" element={<ProfesionForm />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;

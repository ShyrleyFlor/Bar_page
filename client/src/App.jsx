 
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

        

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

function App() {


  return (

      <div>
          <Routes>
           {/*  
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/1" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;

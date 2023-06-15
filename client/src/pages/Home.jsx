import React from "react";
import imagen from "../assets/hola.gif";	

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={imagen} alt="Descripción de la imagen" />
    </div>
  );
}

export default Home;
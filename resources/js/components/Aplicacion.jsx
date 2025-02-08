import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Index from "./Pages/Index";
import Error404 from "./Pages/Error404";
import Direcciones from "./Pages/Direcciones/Direcciones";
import { ToastContainer } from "react-toastify";
import Carreras from "./Pages/Carreras/Carreras";
import Asignaturas from "./Pages/Asignaturas/Asignaturas";

function Aplicacion() {
  return (
    <Router>
      <Menu />

      <ToastContainer />

      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/direcciones" element={<Direcciones />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/asignaturas" element={<Asignaturas />} />
          <Route path="*" element={<Error404/>} />          
        </Routes>
      </div>
    </Router>
  );
}

export default Aplicacion;

if (document.getElementById('root')) {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
    <React.StrictMode>
      <Aplicacion />
    </React.StrictMode>
  );
}

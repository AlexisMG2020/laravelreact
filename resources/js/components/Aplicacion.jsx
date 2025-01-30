import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import Index from "./Pages/Index";

function Aplicacion() {
  return (
    <Router>
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
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

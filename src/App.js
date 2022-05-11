import { ThemeProvider } from "@material-ui/core";
import React from "react";
import MenuAppBar from "./componentes/navegacion/MenuAppBar";
import Login from "./componentes/seguridad/Login";
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import theme from "./theme/theme";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Libro from "./componentes/pantallas/Libro";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuAppBar />
        <Routes>
          <Route end path="/login" element={<Login /> } />
          <Route end path="/registrar" element={ <RegistrarUsuario /> } />
          <Route end path="/" element={ <Libro/> } />
        </Routes>
      </Router>
    </ThemeProvider>
      
    
  );
}

export default App;

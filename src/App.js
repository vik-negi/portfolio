import "./App.css";
import "./style/Loader.css";
import Navbar from "./componenets/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { isAutheticated } from "./pages/admin/utils/auth";
import Experiences from "./pages/Experiences";
import { useEffect, useCallback } from "react";
import { AppProvider } from "./context/Context";

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./demo";
// import { ThemeModeProvider } from "./context/ThemeContext";
import { themes, StyledComponent } from "./utils/Theme";
import LayoutComponent from "./utils/TopLayerLayout";

function App() {
  return (
    <HashRouter base="/">
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutComponent children={<Home />} notShowNavbar={true} />
            }
          />
          <Route
            path="/about"
            element={<LayoutComponent children={<About />} />}
          />
          <Route
            path="/skills"
            element={<LayoutComponent children={<Skills />} />}
          />
          <Route
            path="/projects"
            element={<LayoutComponent children={<Projects />} />}
          />
          <Route
            path="/contact"
            element={<LayoutComponent children={<Contact />} />}
          />
          <Route
            path="/experiences"
            element={<LayoutComponent children={<Experiences />} />}
          />
        </Routes>
      </AppProvider>
    </HashRouter>
  );
}
export default App;

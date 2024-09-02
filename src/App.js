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
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import LoginWrapper from "./pages/admin/utils/LoginWrapper";
import { AboutIndex } from "./pages/admin/about";
import Register from "./pages/admin/Register";
import VerifyOtp from "./pages/admin/VerifyOtp";
import AdminExperience from "./pages/admin/experience/Experience";
import AdminProject from "./pages/admin/project/AdminProjects";
import AdminSkills from "./pages/admin/skills/components/AdminSkills";
import CreatePortfolio from "./pages/admin/dashboard/CreatePortfolio";
import MainDashboard from "./pages/MainDashboard";

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

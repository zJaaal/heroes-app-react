import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import DCPage from "../pages/DC/DCPage";
import MarvelPage from "../pages/Marvel/MarvelPage";
import SearchPage from "../pages/SearchPage";
import HeroPage from "../pages/HeroPage";

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="dc" element={<DCPage />} />
        <Route exact path="marvel" element={<MarvelPage />} />
        <Route exact path="search" element={<SearchPage />} />
        <Route exact path="hero" element={<HeroPage />} />

        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default DashboardRoutes;

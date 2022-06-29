import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import DCPage from "../pages/DC/DCPage";
import MarvelPage from "../pages/Marvel/MarvelPage";
import LoginPage from "../pages/LoginPage";
import SearchPage from "../pages/SearchPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dc" element={<DCPage />} />
        <Route exact path="/marvel" element={<MarvelPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

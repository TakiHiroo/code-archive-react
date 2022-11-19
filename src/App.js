import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Front from "./pages/front/Front";
import Back from './pages/back/Back'
import Data from "./pages/data/Data";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="front" element={<Front />} />
        <Route path="back" element={<Back />} />
        <Route path="data" element={<Data />} />
      </Routes>
    </BrowserRouter>
  );
}
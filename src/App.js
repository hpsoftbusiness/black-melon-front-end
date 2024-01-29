import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Programmers from './Programmers';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exec path="/programmers" element={<Programmers/>}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

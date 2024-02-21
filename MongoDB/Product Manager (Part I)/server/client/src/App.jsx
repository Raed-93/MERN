import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Main from './Views/Main';
import Detail from './Components/Detail';
import "./App.css";

function App() {
    return (
      
            <Routes>
                <Route path="/product" element={<Main />} />
                <Route path="/product/:id" element={<Detail />} />
            </Routes>
     
    );
}

export default App;



import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrincipalPage from './container/principalpage';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path={'/'} element ={<PrincipalPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

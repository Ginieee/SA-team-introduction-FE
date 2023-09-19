import { Global } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';
import { globalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <Global styles={globalStyle}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add' element={<AddPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

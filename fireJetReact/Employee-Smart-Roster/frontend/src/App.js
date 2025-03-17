import React from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import SADasboard from './Home/SADasboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import './Styles/common.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/sadasboard' element={<SADasboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

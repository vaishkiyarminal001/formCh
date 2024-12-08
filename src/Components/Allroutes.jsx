import React from 'react';


import RegistrationForm from './RegistrationForm';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registrationform" element={<RegistrationForm/>} />
    </Routes>

      
   
  );
};

export default Allroutes;

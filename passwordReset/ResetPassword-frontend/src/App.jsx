import React from 'react';
import ForgotPassword from './Components/ForgetPassword.jsx';
import ResetPassword from './Components/ResetPassword.jsx';
import Registration from './Components/Registration.jsx';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
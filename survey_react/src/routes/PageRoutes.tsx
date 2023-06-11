import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import Surveys from '../views/Surveys';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import GuestLayout from '../components/GuestLayout';
import DefaultLayout from '../components/DefaultLayout';

const PageRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="surveys" element={<Surveys />} />
            <Route path="/dashboard" element={<Navigate to="/" />} />
        </Route>
        <Route path="/" element={<GuestLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default PageRoutes;

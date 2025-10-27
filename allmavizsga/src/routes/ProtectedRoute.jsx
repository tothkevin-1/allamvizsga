import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Ha nincs bejelentkezett felhasználó, irányíts át a /login oldalra
    return <Navigate to="/login" />;
  }

  // Ha van, jelenítsd meg a belső tartalmat (az oldalt, amit védeni akarunk)
  return <Outlet />;
};

export default ProtectedRoute;
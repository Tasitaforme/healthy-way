import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';

const PublicGuard = ({ component: Component, redirectTo }) => {
  const isAuth = useSelector(selectToken);
  const location = useLocation();

  return !isAuth ? (
    <Component />
  ) : (
    <Navigate to={location.state ?? redirectTo} />
  );
};

export default PublicGuard;

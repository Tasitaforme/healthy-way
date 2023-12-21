import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuthInfo } from '../redux/auth/selectors';

const PublicGuard = ({ component: Component, redirectTo }) => {
  const { isLogin } = useSelector(selectAuthInfo);
  const location = useLocation();

  return !isLogin ? (
    <Component />
  ) : (
    <Navigate to={location.state ?? redirectTo} />
  );
};

export default PublicGuard;

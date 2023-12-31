import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuthInfo } from '../redux/auth/selectors';

const PrivateGuard = ({ component: Component, redirectTo }) => {
  const { isLogin } = useSelector(selectAuthInfo);
  const location = useLocation();

  return isLogin ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} state={location} />
  );
};

export default PrivateGuard;

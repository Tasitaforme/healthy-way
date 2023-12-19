import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from '../redux/auth/selectors';

const PrivateGuard = ({ component: Component, redirectTo }) => {
  const isAuth = useSelector(selectToken);
  const localToken = localStorage.getItem('token');
  console.log(localToken);
  const location = useLocation();

  return isAuth || localToken ? (
    <Component />
  ) : (
    <Navigate to={redirectTo} state={location} />
  );
};

export default PrivateGuard;

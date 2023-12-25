import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInfo } from '../../redux/auth/selectors';
import { currentUser } from '../../redux/auth/operations';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const { isLogin, accessToken } = useSelector(selectAuthInfo);

  useEffect(() => {
    if (isLogin || accessToken) {
      dispatch(currentUser());
    }
  }, [dispatch, isLogin, accessToken]);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

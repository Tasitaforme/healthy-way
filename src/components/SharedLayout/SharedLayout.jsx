import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../../redux/auth/selectors';
import { currentUser } from '../../redux/auth/operations';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const localToken = useSelector(selectToken);

  // useEffect(() => {
  //   const refresh = () => {
  //     !isLogin &&
  //       localToken &&
  //       dispatch(refresh())
  //         .unwrap()
  //         .then(() => {
  //           dispatch(currentUser());
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 401) {
  //             localStorage.removeItem('token');
  //             document.location.reload();
  //             return;
  //           }
  //           toast.error(`Unknown error... \n ${error.message}`);
  //         });
  //   };
  //   refresh();
  // }, [dispatch, isLogin, localToken]);

  useEffect(() => {
    if (isLogin) {
      dispatch(currentUser());
    }
  }, [isLogin, dispatch]);

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

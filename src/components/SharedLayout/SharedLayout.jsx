import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInfo } from '../../redux/auth/selectors';
import { currentUser } from '../../redux/auth/operations';
import { getRecommendedFood } from '../../redux/recommendedFood/operations';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const { isLogin, refreshToken } = useSelector(selectAuthInfo);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch, isLogin]);

  // useEffect(() => {
  //   const refresh = () => {
  //     dispatch(refresh({ refreshToken }))
  //       .unwrap()
  //       .then(() => {
  //         dispatch(currentUser());
  //         dispatch(getRecommendedFood());
  //       })
  //       .catch((error) => {
  //         toast.error(`Unknown error... \n ${error.message}`);
  //       });
  //   };

  //   if (!isLogin && refreshToken) {
  //     refresh();
  //     return;
  //   }
  //   if (isLogin) {
  //     dispatch(currentUser());
  //     dispatch(getRecommendedFood());
  //   }
  // }, [dispatch, isLogin]);

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

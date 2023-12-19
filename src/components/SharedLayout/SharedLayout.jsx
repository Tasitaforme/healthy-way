import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { currentUser, logOut } from '../../redux/auth/operations';
import { resetWater } from '../../redux/water/waterSlice';
import { resetRecommendedFood } from '../../redux/recommendedFood/recommendedFoodSlice';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  // TODO accessToken/refreshToken
  // const { refreshToken, accessToken } = useSelector(selectAuthInfo);

  // useEffect(() => {
  //   const refresh = () => {
  //     !isLogin &&
  //       accessToken &&
  //       dispatch(refresh(refreshToken))
  //         .unwrap()
  //         .then(() => {
  //           dispatch(currentUser());
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 403) {
  //             dispatch(logOut());
  //             dispatch(resetWater());
  //             dispatch(resetRecommendedFood());
  //             dispatch(resetStatistics());
  //             dispatch(resetDiary());
  //             document.location.reload();
  //             return;
  //           }
  //           toast.error(`Unknown error... \n ${error.message}`);
  //         });
  //   };
  //   refresh();
  // }, [dispatch, isLogin, accessToken]);

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

import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthInfo } from '../../redux/auth/selectors';
import { currentUser, logOut, refresh } from '../../redux/auth/operations';
import { getFoodDiaryToday } from '../../redux/diary/operations';

export default function SharedLayout() {
  const dispatch = useDispatch();
  const { isLogin, accessToken } = useSelector(selectAuthInfo);

  useEffect(() => {
    if (accessToken) {
      dispatch(currentUser());
      dispatch(getFoodDiaryToday());
    }
  }, [dispatch, isLogin, accessToken]);
  //---------------------------------
  // useEffect(() => {
  //   const doRefresh = () => {
  //     !isLogin &&
  //       refreshToken &&
  //       dispatch(refresh({ refreshToken }))
  //         .unwrap()
  //         .then(() => {
  //           dispatch(currentUser());
  //           dispatch(getFoodDiaryToday());
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 403) {
  //             console.log(error);
  //             // dispatch(logOut());
  //             return;
  //           }
  //           toast.error('Sorry. You will be log out...');
  //         });
  //   };
  //   doRefresh();
  // }, [isLogin, refreshToken, dispatch]);

  // useEffect(() => {
  //   if (isLogin) {
  //     dispatch(currentUser());
  //     dispatch(getFoodDiaryToday());
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

import { Suspense, useEffect, useRef } from 'react';
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
  const { isLogin, refreshToken } = useSelector(selectAuthInfo);

  const refreshing = useRef(false);

  useEffect(() => {
    const doRefresh = () => {
      if (!isLogin && refreshToken) {
        dispatch(refresh({ refreshToken }))
          .unwrap()
          .then(() => {
            dispatch(currentUser());
            dispatch(getFoodDiaryToday());
          })
          .catch((error) => {
            if (error.response.status === 403) {
              console.log(error);
              // dispatch(logOut());
              return;
            }
            toast.error('Sorry. You will be log out...');
          })
          .finally(() => (refreshing.current = false));
      } else {
        refreshing.current = false;
      }
    };

    if (!refreshing.current) {
      refreshing.current = true;
      doRefresh();
    }
  }, [isLogin, refreshToken, dispatch]);

  useEffect(() => {
    if (isLogin) {
      dispatch(currentUser());
      dispatch(getFoodDiaryToday());
    }
  }, [dispatch, isLogin]);

  //--------------------------------
  // useEffect(() => {
  //   dispatch(currentUser());
  // }, [dispatch, isLogin]);
  //--------------------------------
  // useEffect(() => {
  //   const doRefresh = async () => {
  //     try {
  //       await dispatch(refresh({ refreshToken })).unwrap();
  //       await dispatch(currentUser()).unwrap();
  //       await dispatch(getFoodDiaryToday()).unwrap();
  //     } catch (error) {
  //       console.log(error);
  //       dispatch(logOut()).unwrap();
  //       toast.error('Sorry. You will be log out...');
  //     }
  //   };

  //   if (!isLogin && refreshToken) {
  //     doRefresh();
  //   }
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

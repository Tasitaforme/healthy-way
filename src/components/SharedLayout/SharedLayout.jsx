import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastOptions } from '../StyledComponents/toastOptions';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster toastOptions={toastOptions} />
    </>
  );
}

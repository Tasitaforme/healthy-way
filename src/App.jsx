import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { lazy } from 'react';
import PublicGuard from './guards/PublicGuard';
import PrivateGuard from './guards/PrivateGuard';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { useSelector } from 'react-redux';
import { selectAuthInfo } from './redux/auth/selectors';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const ForgotPasswordPage = lazy(() =>
  import('./pages/ForgotPasswordPage/ForgotPasswordPage')
);
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage/SettingsPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));
const RecommendedFoodPage = lazy(() =>
  import('./pages/RecommendedFoodPage/RecommendedFoodPage')
);

const App = () => {
  const { isLogin } = useSelector(selectAuthInfo);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={!isLogin ? <WelcomePage /> : <MainPage />} />
          {/* public routes */}
          <Route
            path="welcome"
            element={<PublicGuard component={WelcomePage} redirectTo="/main" />}
          />
          <Route
            path="signup"
            element={<PublicGuard component={SignUpPage} redirectTo="/main" />}
          />
          <Route
            path="signin"
            element={<PublicGuard component={SignInPage} redirectTo="/main" />}
          />
          <Route
            path="forgot-password"
            element={
              <PublicGuard
                component={ForgotPasswordPage}
                redirectTo="/signin"
              />
            }
          />
          {/* private routes */}
          <Route
            path="main"
            element={<PrivateGuard component={MainPage} redirectTo="/signin" />}
          />
          <Route
            path="dashboard"
            element={
              <PrivateGuard component={DashboardPage} redirectTo="/signin" />
            }
          />
          <Route
            path="diary"
            element={
              <PrivateGuard component={DiaryPage} redirectTo="/signin" />
            }
          />
          <Route
            path="recommended-food"
            element={
              <PrivateGuard
                component={RecommendedFoodPage}
                redirectTo="/signin"
              />
            }
          />
          <Route
            path="settings"
            element={
              <PrivateGuard component={SettingsPage} redirectTo="/signin" />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* {isLoading && <Loader />} */}
    </>
  );
};
export default App;

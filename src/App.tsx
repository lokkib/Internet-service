// import ProfilePage from './pages/ProfilePage/ProfilePage'
// import MainPage from './pages/MainPage/MainPage';
// import SellerProfilePage from './pages/SellerProfilePage/SellerProfilePage'
// import UserArticle from './pages/UserArticle/UserArticle'
// import SellerArticle from './pages/ArticleItem/SellerArticle'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import AppRoutes from './routes/Approutes';
import { useRefreshTokenMutation } from './redux/api/avitoApi';
import MyToken from './@types/MyToken';
import { checkToken } from './redux/slices/checkTokenSlice';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (sessionStorage.getItem('isAuth')) {
        // console.log(sessionStorage.getItem);
        const token = getCookie('access');
        const decodedToken = jwt_decode<MyToken>(token as string);
        const dateNow = new Date();
        if (decodedToken.exp * 1000 < dateNow.getTime()) {
          // console.log('токен истек');
          dispatch(checkToken(false));
          const getNewToken = async () => {
            await refreshToken({
              refresh_token: getCookie('refresh'),
              access_token: getCookie('access'),
            })
              .unwrap()
              .then((response) => {
                setCookie('access', response.access_token);
                setCookie('refresh', response.refresh_token);
                sessionStorage.setItem('isAuth', 'true');
              })
              .catch((error) => {
                throw new Error(error);
              });
          };
          getNewToken();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <AppRoutes />;
};
export default App;

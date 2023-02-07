import React, { useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import AppRoutes from './routes/Approutes';
import { useRefreshTokenMutation } from './redux/api/avitoApi';

type MyToken = {
  name: string;
  exp: number;
};

const App: React.FC = () => {
  const isLoggedIn = sessionStorage.getItem('isAuth');
  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (isLoggedIn) {
        const token = getCookie('access');
        const decodedToken = jwt_decode<MyToken>(token as string);
        const dateNow = new Date();
        if (decodedToken.exp * 1000 < dateNow.getTime()) {
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

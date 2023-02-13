import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SellerArticle from '../pages/ArticleItem/SellerArticlePage';
import MainPage from '../pages/MainPage/MainPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SellerProfilePage from '../pages/SellerProfilePage/SellerProfilePage';
import UserArticlePage from '../pages/UserArticle/UserArticlePage';
import Layout from '../components/layouts/Layout';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="my-account"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-ads/:id"
            element={
              <ProtectedRoute>
                <UserArticlePage />
              </ProtectedRoute>
            }
          />
          <Route path="ads/:id" element={<SellerArticle />} />

          <Route path="seller-page/:id" element={<SellerProfilePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;

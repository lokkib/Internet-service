import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import SellerArticle from '../pages/ArticleItem/SellerArticlePage';
import MainPage from '../pages/MainPage/MainPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SellerProfilePage from '../pages/SellerProfilePage/SellerProfilePage';
import UserArticle from '../pages/UserArticle/UserArticle';
import Layout from '../components/layouts/Layout';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="my-account"
            element={
              <ProtectedRoute isLoggedIn={sessionStorage.getItem('isAuth')}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* <Route path="my-account" element={<ProfilePage />} /> */}
          <Route path="my-item" element={<UserArticle />} />
          <Route
            path="ads/:id"
            element={
              <ProtectedRoute isLoggedIn={sessionStorage.getItem('isAuth')}>
                <SellerArticle />
              </ProtectedRoute>
            }
          />
          {/* <Route path="ads/:id" element={<SellerArticle />} /> */}
          <Route path="seller-page/:id" element={<SellerProfilePage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;

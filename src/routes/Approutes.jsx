import { Routes, Route } from 'react-router-dom';
import SellerArticle from '../pages/ArticleItem/SellerArticle';
import MainPage from '../pages/MainPage/MainPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SellerProfilePage from '../pages/SellerProfilePage/SellerProfilePage';
import UserArticle from '../pages/UserArticle/UserArticle';
import Layout from '../components/layouts/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="my-account" element={<ProfilePage />} />
        <Route path="my-item" element={<UserArticle />} />
        <Route path="item" element={<SellerArticle />} />
        <Route path="seller-page" element={<SellerProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

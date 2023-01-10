import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <MobFooter classType="mainPageFooter" />
    </>
  );
};

export default MainPage;

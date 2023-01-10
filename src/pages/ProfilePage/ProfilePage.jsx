import Header from '../../components/Header/Header';
import MainContent from './MainContent/MainContent';
import MobFooter from '../../components/MobFooter/MobFooter';

const ProfilePage = () => {
  return (
    <>
      <Header classType="profileHeading" />
      <MainContent />
      <MobFooter classType="profileFooter" />
    </>
  );
};

export default ProfilePage;

import Header from '../../components/Header/Header';
import Main from '../ArticleItem/Main/Main';

const UserArticle = () => {
  return (
    <>
      <Header classType="sellerPageHeading" />
      <Main onlyOneButton="false" />
    </>
  );
};

export default UserArticle;

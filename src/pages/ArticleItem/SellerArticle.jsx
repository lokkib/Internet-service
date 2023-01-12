import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';

import Main from './Main/Main';

const SellerArticle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Main onlyOneButton="true" />
    </motion.div>
  );
};

export default SellerArticle;

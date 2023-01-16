import React from 'react';
import MainSearch from './MainSearch/MainSearch';
import MainInfo from './MainInfo/MainInfo';

const MainContent: React.FC = () => {
  return (
    <main>
      <MainSearch />
      <MainInfo />
    </main>
  );
};

export default MainContent;

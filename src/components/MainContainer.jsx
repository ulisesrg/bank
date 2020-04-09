import React from 'react';

const MainContainer = ({ children, section, title }) => {
  let sectionClass;
  switch (section) {
    case 'home':
      sectionClass = 'home';
      break;
    case 'transfer':
      sectionClass = 'transfer';
      break;
    default:
      sectionClass = null;
  }

  return (
    <main className={`main ${sectionClass}`}>
      {title && (
        <h1 className='title centered'>{title}</h1>
      )}
      {children}
    </main>
  );
};
export default MainContainer;

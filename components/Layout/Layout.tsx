import React, { FC, ReactNode } from 'react';
import MainNavigation from './MainNavigation';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;

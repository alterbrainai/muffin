// frontend/src/components/Layout.tsx

import React from 'react';
import NavBar from '@/components/NavBar';
import { Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  );
};

export default Layout;

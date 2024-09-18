// frontend/src/components/NavBar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

const NavBar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Finance Research App
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation('/home')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleNavigation('/backtest')}>
          Backtest
        </Button>
        <Button color="inherit" onClick={() => handleNavigation('/settings')}>
          Settings
        </Button>
        <Button color="inherit" onClick={() => handleNavigation('/test')}>
          Test
        </Button>
        <Button
          color="inherit"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
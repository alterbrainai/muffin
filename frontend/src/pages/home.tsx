// frontend/src/pages/home.tsx

import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

const HomePage: React.FC = () => {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <Layout>
        <Typography variant="h5">
          Welcome, {session?.user.username}
        </Typography>
        {/* Dashboard content */}
      </Layout>
    </ProtectedRoute>
  );
};

export default HomePage;
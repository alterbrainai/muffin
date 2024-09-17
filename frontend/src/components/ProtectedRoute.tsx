// frontend/src/components/ProtectedRoute.tsx

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/');
  }, [status, router]);

  if (status === 'authenticated') {
    return <>{children}</>;
  }

  return null; // or a loading indicator
};

export default ProtectedRoute;

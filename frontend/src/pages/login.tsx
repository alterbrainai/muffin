// frontend/pages/login.tsx

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const username = (event.target as any).username.value;
    const password = (event.target as any).password.value;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      // Redirect to the desired page
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <input name="username" type="text" required />
        <input name="password" type="password" required />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
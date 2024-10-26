'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

export default function Logout() {
  const logout = () => {
    signOut({ callbackUrl: '/login' });
  };

  React.useEffect(() => {
    logout();
  }, []);
  return <div>Logout</div>;
}

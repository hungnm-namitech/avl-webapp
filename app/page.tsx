'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [router, session]);

  return <div></div>;
}

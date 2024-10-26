'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

export default function LayoutNoAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

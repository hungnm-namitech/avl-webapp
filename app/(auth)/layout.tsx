'use client';

import SideBar from '@/app/components/common/SideBar';
import { useLayoutPage } from '@/app/store/layoutPage';
import { CircularProgress, cn } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react';

export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpenMenu } = useLayoutPage();
  const { status } = useSession();

  if (status === 'loading')
    return (
      <div className='relative z-20 flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8'>
        <CircularProgress size='lg' aria-label='Loading...' />
      </div>
    );

  return (
    <div className='flex h-screen min-h-screen text-color-base'>
      <div className=''>
        <SideBar />
      </div>
      <div className='relative flex flex-1 pt-[65px]'>
        <div
          className={cn(
            'w-full',
            isOpenMenu ? 'max-w-content-screen' : 'max-w-content-screen-full'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

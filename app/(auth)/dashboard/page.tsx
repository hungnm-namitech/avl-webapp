'use client';
import { useLayoutPage } from '@/app/store/layoutPage';
import React, { useEffect } from 'react';

/**
 *
 * @page Dashboard
 */

export default function Dashboard() {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
    ]);
  }, [saveBreadcrumbs]);

  return <div>Home</div>;
}

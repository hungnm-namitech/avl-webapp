'use client';

import { useLayoutPage } from '@/app/store/layoutPage';
import { BreadcrumbItem, Breadcrumbs, cn } from '@nextui-org/react';
import React from 'react';

/**
 *
 * @component Header
 */

export default function Header({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const { breadcrumbs, isOpenMenu } = useLayoutPage();

  return (
    <div
      className={cn(
        'fixed top-0 z-10 h-[65px] border-b border-color-2rd-border px-6',
        'w-screen bg-white',
        'z-50 flex items-center justify-between',
        isOpenMenu ? 'max-w-content-screen' : 'max-w-content-screen-full'
      )}
    >
      <Breadcrumbs
        separator='/'
        itemClasses={{
          separator: 'px-2',
          item: 'text-primary hover:underline data-[current=true]:text-placeholder hover:data-[current=true]:no-underline',
        }}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={index} href={breadcrumb.href}>
            {breadcrumb.text}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      {children}
    </div>
  );
}

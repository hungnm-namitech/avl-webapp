'use client';

import React from 'react';
import { cn } from '@nextui-org/react';
import { CloseToast, Swoosh } from '../svg';

type Props = {
  title: string;
  className?: string;
};

const Toast = ({ title, className }: Props) => {
  return (
    <div
      className={cn(
        'flex h-[44px] w-[240px] items-center justify-between rounded border border-[#08781F] bg-[#DBFFE4] px-3 text-sm font-bold leading-[20.27px] text-black',
        className
      )}
    >
      <div className='flex items-center gap-[10px]'>
        <Swoosh />
        {title}
      </div>
      <CloseToast />
    </div>
  );
};

export default Toast;

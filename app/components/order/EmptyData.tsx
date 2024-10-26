'use client';

import { cn, Image } from '@nextui-org/react';
import React from 'react';

type EmptyDataProps = {
  title: string;
};
export default function EmptyData(props: EmptyDataProps) {
  const { title } = props;
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center pt-[100px]',
        'text-sm text-placeholder'
      )}
    >
      <Image src={'/images/nodata.png'} width={90} height={60} alt='no-data' />

      {title}
    </div>
  );
}

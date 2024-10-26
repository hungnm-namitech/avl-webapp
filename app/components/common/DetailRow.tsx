import { cn } from '@nextui-org/react';
import React, { Fragment } from 'react';
interface DetailRowProps {
  items?: ItemsDetailRow[];
}

export default function DetailRow(props: DetailRowProps) {
  const { items } = props;
  return (
    <div className='inline-grid min-h-[41px] w-full grid-cols-4 border-b border-color-2rd-border'>
      {items?.map((item, index) => (
        <Fragment key={index}>
          <div className='flex items-center bg-color-gray px-4 text-base font-bold leading-5 text-color-label'>
            {item.label}
          </div>
          <div
            className={cn(
              items?.length === 1 && 'col-span-3',
              'flex items-center px-4 text-base font-normal leading-5 text-color-base'
            )}
          >
            {item.content}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

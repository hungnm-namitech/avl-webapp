import React from 'react';
import { Radio, RadioProps } from '@nextui-org/react';

export const RadioComponent = ({
  children,
  ref,
  classNames,
  ...props
}: RadioProps) => {
  return (
    <Radio
      ref={ref}
      classNames={{
        base: 'inline-flex m-0 p-0 flex-row items-center justify-between max-w-[74px] cursor-pointer',
        control: 'bg-white',
        wrapper: 'w-[18px] h-[18px] group-data-[selected=true]:bg-primary',
        label: 'w-[48px]',
        ...classNames,
      }}
      {...props}
    >
      {children}
    </Radio>
  );
};

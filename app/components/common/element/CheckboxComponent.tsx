import { Checkbox, CheckboxProps } from '@nextui-org/react';
import React, { forwardRef } from 'react';

interface Props extends CheckboxProps {}

const CheckboxComponent = forwardRef<HTMLInputElement, Props>(
  ({ children, classNames, ...props }, ref) => {
    return (
      <Checkbox
        ref={ref}
        classNames={{
          wrapper: [
            'before:border-2 before:border-color-border before:rounded-[2px] before:w-4 before:h-4 before:bg-white',
            'after:rounded-[2px] w-4 h-4',
          ],
          label: 'text-base leading-6 text-color-base w-full',
          ...classNames,
        }}
        radius='none'
        {...props}
      >
        {children}
      </Checkbox>
    );
  }
);

CheckboxComponent.displayName = 'CheckboxComponent';

export default CheckboxComponent;

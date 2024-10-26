import React, { forwardRef } from 'react';
import { Input, InputProps as BaseInputProps, cn } from '@nextui-org/react';

interface InputProps extends BaseInputProps {
  isError?: boolean;
}

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, placeholder = ' ', disabled, classNames, isError, ...props },
    ref
  ) => {
    return (
      <Input
        ref={ref}
        placeholder={placeholder}
        labelPlacement='outside'
        className={cn('w-[230px]', className)}
        classNames={{
          inputWrapper: [
            'border border-color-border rounded-[4px] bg-white h-[48px] min-h-9',
            'group-data-[focus=true]:bg-white group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1.5px]',
            'group-data-[hover=true]:bg-white',
            disabled && 'bg-color-gray group-data-[hover=true]:bg-color-gray',
            isError && 'border-color-error',
          ],
          input: 'placeholder:text-placeholder placeholder:leading-5 text-base',
          label: '!text-color-label font-bold leading-[17.5px]',
          ...classNames,
        }}
        disabled={disabled}
        {...props}
      />
    );
  }
);

InputComponent.displayName = 'InputComponent';

export default InputComponent;

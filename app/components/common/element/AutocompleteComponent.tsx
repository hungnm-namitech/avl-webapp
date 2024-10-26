'use client';
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
  cn,
} from '@nextui-org/react';
import React, { forwardRef } from 'react';
import { ArrowDown } from '../../svg';

interface Props extends Omit<AutocompleteProps, 'children'> {
  className?: string;
  items: { label: string; value: string | number }[];
  value?: string;
  onChange?: () => void;
}

const AutocompleteComponent = forwardRef<HTMLInputElement, Props>(
  (
    { className, items, value, onChange, isDisabled, inputProps, ...props },
    ref
  ) => {
    return (
      <Autocomplete
        allowsCustomValue
        isDisabled={isDisabled}
        ref={ref}
        variant='bordered'
        className={cn('w-[230px]', className, isDisabled && 'bg-color-gray')}
        selectorIcon={<ArrowDown />}
        inputProps={{
          classNames: {
            inputWrapper: [
              'border border-color-border rounded-[4px] bg-white h-[48px] min-h-9',
              'group-data-[focus=true]:border-primary group-data-[focus=true]:border-[1.5px]',
              isDisabled && 'bg-color-gray ',
              inputProps?.classNames?.innerWrapper,
            ],
            input: 'text-base',
          },
        }}
        popoverProps={{
          classNames: {
            content: 'rounded-sm shadow-popover p-0 m-0',
          },
        }}
        listboxProps={{
          classNames: {
            base: 'p-0',
            list: 'gap-0',
          },
        }}
        selectedKey={value}
        onSelectionChange={onChange}
        {...props}
        defaultItems={items}
      >
        {(item: { label: string; value: string | number }) => (
          <AutocompleteItem
            classNames={{
              wrapper: 'p-0',
              title: 'text-sm leading-[22px] pl-[10px]',
              base: 'rounded-none h-[47px] border-b border-color-2rd-border p-0 last:border-none',
              selectedIcon: 'w-5 pr-2',
            }}
            value={item.value}
            key={item.value}
          >
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    );
  }
);

AutocompleteComponent.displayName = 'AutocompleteComponent';

export default AutocompleteComponent;

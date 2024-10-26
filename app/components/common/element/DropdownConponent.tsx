'use client';
import React from 'react';
import {
  Dropdown as DropdownUI,
  DropdownTrigger,
  DropdownMenu,
  Button,
  Selection,
  DropdownItem,
  cn,
} from '@nextui-org/react';
import { ArrowDown } from '../../svg';

interface Props {
  items: { label: string; value: string }[];
  className?: string;
  value?: Selection;
  onChange?: (value: Selection) => void;
  handleAction?: (key: React.Key) => void;
}

export default function DropdownComponent({
  items,
  className,
  value,
  onChange,
  handleAction,
}: Props) {
  return (
    <DropdownUI classNames={{ content: 'rounded p-0' }}>
      <DropdownTrigger>
        <Button
          variant='bordered'
          className={cn(
            'flex w-full min-w-[120px] justify-between rounded border-1 px-3',
            className
          )}
        >
          {value} <ArrowDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{ base: 'p-0' }}
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={value}
        onSelectionChange={onChange}
        onAction={handleAction}
      >
        {items.map((item) => (
          <DropdownItem className='h-[47px] rounded-none' key={item.value}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownUI>
  );
}

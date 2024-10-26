import React, { useMemo, useState } from 'react';

import {
  Button,
  cn,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { ArrowDown, Magnifying } from './svg';
import InputComponent from './common/element/InputComponent';

interface Props {
  classNameBtn?: string;
  items: { label: string; value: string | number }[];
  classContent?: string;
}

const DropdownSearch = ({ classNameBtn, items, classContent }: Props) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const divisions = useMemo(() => {
    return items.filter((item) =>
      item.label.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, items]);

  return (
    <Popover
      placement='bottom'
      classNames={{
        base: 'w-[565px] flex justify-center',
        content: ['w-fit rounded-sm shadow-popover p-0', classContent],
      }}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <PopoverTrigger>
        <Button
          variant='bordered'
          className={cn(
            'min-w-[192px] rounded border-1 aria-[expanded=true]:scale-100',
            classNameBtn
          )}
          endContent={
            <div className={cn('absolute right-4', isOpen && 'rotate-180')}>
              <ArrowDown />
            </div>
          }
          onClick={() => setIsOpen(!isOpen)}
          disableRipple
        >
          {selectedValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='w-full border-b border-color-2rd-border p-2'>
          <InputComponent
            autoFocus
            className='h-9 w-full'
            startContent={<Magnifying />}
            placeholder='キーワードを入力'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {divisions.map((item) => (
          <div
            key={item.value}
            className='w-full cursor-pointer border-b border-color-2rd-border px-4 py-3 last:border-none hover:bg-gray-100'
            onClick={() => {
              setIsOpen(false);
              setSelectedValue(item.label);
            }}
          >
            {item.label}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default DropdownSearch;

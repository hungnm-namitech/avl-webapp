'use client';

import { ja } from 'date-fns/locale/ja';
import React, { Fragment } from 'react';
import DatePicker, { DatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ArrowDown, Calendar } from '../../svg';
import { getMonth, getYear } from 'date-fns';
import { cn, forwardRef } from '@nextui-org/react';

interface InputDatePicker {
  selected?: Date | null;
  className?: string;
}

export default function DatePickerComponent({
  selected,
  className,
  name,
  ...rest
}: InputDatePicker & DatePickerProps) {
  return (
    <Fragment>
      <DatePicker
        dateFormat='yy/MM/dd'
        placeholderText='yy/mm/dd'
        selected={selected}
        locale={ja}
        className={cn(
          'h-9 w-full rounded border-1 border-color-border px-3 text-sm focus:border-black',
          className
        )}
        wrapperClassName='w-full'
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className='flex justify-between bg-white px-4 py-2'>
            <div className='flex gap-1 text-[11px] font-normal'>
              <span>{getYear(date)}年</span>
              <span>{getMonth(date) + 1}月</span>
            </div>
            <div className='flex items-center gap-5'>
              <div
                className='rotate-90 cursor-pointer select-none'
                onClick={decreaseMonth}
              >
                <ArrowDown />
              </div>
              <div
                className='-rotate-90 cursor-pointer select-none'
                onClick={increaseMonth}
              >
                <ArrowDown />
              </div>
            </div>
          </div>
        )}
        showIcon={!!!selected}
        isClearable={!!selected}
        {...rest}
        icon={
          <div className='absolute right-0 top-1'>
            <Calendar />
          </div>
        }
      />
    </Fragment>
  );
}

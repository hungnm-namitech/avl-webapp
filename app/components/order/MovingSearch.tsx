import React from 'react';
import AutocompleteComponent from '../common/element/AutocompleteComponent';
import DatePickerComponent from '../common/element/DatePickerComponent';
import InputComponent from '../common/element/InputComponent';

const MovingSearch = () => {
  const animals = [
    {
      label: 'Cat',
      value: 'cat',
    },
    {
      label: 'Dog',
      value: 'dog',
    },
    {
      label: 'Elephant',
      value: 'elephant',
    },
    { label: 'Lion', value: 'lion' },
    { label: 'Tiger', value: 'tiger' },
    {
      label: 'Giraffe',
      value: 'giraffe',
    },
  ];
  return (
    <div className='flex flex-col gap-2'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>受注番号</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>受付番号</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>得意先名</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>顧客名</span>
          <InputComponent className='h-9 grow' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>
            <span>（エリア）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>

            <span>（都道府県）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>
            <span>（市区町村）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>
            <span>（エリア）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>

            <span>（都道府県）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <p className='flex flex-col items-center'>
            <span>積込先</span>
            <span>（市区町村）</span>
          </p>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>積込日</span>
          <div className='flex items-center'>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
            <span className='mx-2'>〜</span>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>荷卸日</span>
          <div className='flex items-center'>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
            <span className='mx-2'>〜</span>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>配車担当者</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>ステータス</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>コース割付</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>備考</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>積込注記</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>荷卸注記</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
      </div>
    </div>
  );
};

export default MovingSearch;

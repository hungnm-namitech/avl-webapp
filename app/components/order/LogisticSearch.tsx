import React from 'react';
import AutocompleteComponent from '../common/element/AutocompleteComponent';
import InputComponent from '../common/element/InputComponent';
import DatePickerComponent from '../common/element/DatePickerComponent';

const LogisticSearch = () => {
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
          <span className='flex-none'>お客様関連ID①</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>お客様関連ID②</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>受注担当者</span>
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
      <div className='flex gap-4'>
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
      </div>
      <div className='flex gap-4'>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>ステータス</span>
          <AutocompleteComponent
            items={animals}
            className='h-9 max-w-[120px]'
          />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>コース割付</span>
          <AutocompleteComponent
            items={animals}
            className='h-9 max-w-[120px]'
          />
        </div>
        <div className='flex items-center gap-2'>
          <span className='flex-none'>備考</span>
          <AutocompleteComponent
            items={animals}
            className='h-9 max-w-[156px]'
          />
        </div>
      </div>
    </div>
  );
};

export default LogisticSearch;

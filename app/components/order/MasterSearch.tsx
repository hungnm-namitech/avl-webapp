import React from 'react';
import InputComponent from '../common/element/InputComponent';
import AutocompleteComponent from '../common/element/AutocompleteComponent';
import DatePickerComponent from '../common/element/DatePickerComponent';

const MasterSearch = () => {
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
      <div className='grid grid-cols-3 gap-4'>
        <div className='flex items-center gap-2'>
          <span>受注マスタID</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span>担当支店</span>
          <InputComponent className='h-9 grow' />
        </div>
        <div className='flex items-center gap-2'>
          <span>受注担当者</span>
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
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <span>開始日</span>
          <div className='flex items-center'>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
            <span className='mx-2'>〜</span>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span>終了日</span>
          <div className='flex items-center'>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
            <span className='mx-2'>〜</span>
            <DatePickerComponent className='h-9 max-w-[144px] text-sm' />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span>得意先名</span>
          <AutocompleteComponent items={animals} className='h-9 grow' />
        </div>
      </div>
    </div>
  );
};

export default MasterSearch;

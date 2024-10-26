'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import { ArrowDown, Magnifying } from '@/app/components/svg';
import NODATA from '@/app/assets/nodata.png';
import Image from 'next/image';
import React, { useEffect } from 'react';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import { useLayoutPage } from '@/app/store/layoutPage';
import MasterSearch from '@/app/components/order/MasterSearch';

type Props = {};
/**
 *
 * @page ORD0201
 */
const SearchOrderMaster = (props: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/master',
        text: '受注マスタ',
      },
    ]);
  }, [saveBreadcrumbs]);

  return (
    <div className='mx-8 my-5 flex h-[95%] flex-1 flex-col'>
      <div className='flex gap-2 rounded border border-color-border px-5 py-3'>
        <div className='flex flex-1 flex-col gap-2 text-xs font-bold leading-[15px] text-color-label'>
          <div className='flex gap-4 border-b border-color-border pb-2 text-xs font-bold'>
            <div className='flex items-center gap-2'>
              <Magnifying />
              <span>絞り込み</span>
            </div>
            <div className='flex cursor-pointer items-center gap-2'>
              <span className='text-primary'>検索条件を閉じる</span>
              <div className='text-primary'>
                <ArrowDown />
              </div>
            </div>
          </div>
          <MasterSearch />
        </div>
        <div className='flex flex-col gap-[15px]'>
          <ButtonComponent className='h-[30px] w-[118px]'>
            項目編集モード
          </ButtonComponent>
          <ButtonComponent
            startContent={<Magnifying color='white' />}
            className='h-[30px] w-[118px] bg-color-selected text-white'
          >
            絞り込み
          </ButtonComponent>
        </div>
      </div>
      <div className='mt-16 flex flex-1 flex-col items-center'>
        <Image src={NODATA} width={90} height={60} alt='no-data' />
        <p className='text-sm leading-[17.5px] text-color-label'>
          検索結果がありません
        </p>
      </div>
      <div className='flex justify-end'>
        <PaginationComponent />
      </div>
    </div>
  );
};

export default SearchOrderMaster;

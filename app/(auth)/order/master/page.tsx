'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import DropdownEditOrder from '@/app/components/order/DropdownEditOrder';
import MasterSearch from '@/app/components/order/MasterSearch';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import { ArrowDown, Magnifying } from '@/app/components/svg';
import TableOrderListMaster from '@/app/components/order/TableOrderListMaster';
import { orderListEdit } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { cn } from '@nextui-org/react';

import React, { useEffect, useState } from 'react';

/**
 *
 * @page ORD0201
 */

const OrderMaster = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);
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
    <div className='relative mx-8 my-4 flex h-[95%] flex-col justify-between'>
      <div>
        <div className='my-4 w-full rounded border border-color-border py-[6px] pl-5 pr-1'>
          <div className='mb-2 flex items-center justify-between'>
            <div className='flex items-center gap-4 text-[14px] font-bold'>
              <div className='flex items-center gap-2'>
                <Magnifying />
                <span>絞り込み検索</span>
              </div>
              <div
                className='flex cursor-pointer select-none items-center gap-2'
                onClick={() => setIsShowSearch(!isShowSearch)}
              >
                <span className='text-primary'>
                  {isShowSearch ? '検索条件を閉じる' : '検索条件を開く'}
                </span>
                <div className={cn(isShowSearch && 'rotate-180')}>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
              </div>
            </div>
            <DropdownEditOrder
              isShowEdit={isShowEdit}
              handleClose={() => setIsShowEdit(false)}
              orderListEdit={orderListEdit}
              handleShow={() => setIsShowEdit(!isShowEdit)}
            />
          </div>
          {isShowSearch && <MasterSearch />}
        </div>
        <TableOrderListMaster />
      </div>
      <div className='flex justify-between'>
        <p className='text-sm leading-[17.5px]'>50件表示 / 1230件中</p>
        <PaginationComponent />
      </div>
      <div className='absolute bottom-[10px] z-20 flex h-[60px] w-full items-center rounded border border-color-2rd-border bg-white px-[17px] shadow-option'>
        <span className='font-bold leading-[22.5px] text-primary'>
          キャンセル
        </span>
        <div className='flex flex-1 items-center justify-center gap-1'>
          <p>
            <span>選択した</span>
            <span className='ml-1 text-[18px] leading-[22.5px]'>2</span>
          </p>
          <div className='flex items-center gap-6 text-sm font-bold'>
            <span>件の受注を</span>
            <ButtonComponent
              className='w-[160px] bg-color-error'
              variant='solid'
            >
              削除
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMaster;

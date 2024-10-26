'use client';

import { Button, cn, DropdownTriggerProps } from '@nextui-org/react';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { CloseBold } from '../svg';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import OrderItem from '../OrderItem';
import ButtonComponent from '../common/element/ButtonComponent';
import update from 'immutability-helper';

interface Props extends DropdownTriggerProps {
  isShowEdit: boolean;
  handleClose: () => void;
  orderListEdit: {
    label: string;
    show: boolean;
    id: string;
  }[];
  handleShow: () => void;
}

const DropdownEditOrder = ({
  isShowEdit,
  handleClose,
  orderListEdit,
  handleShow,
}: Props) => {
  const [orderList, setOrderList] = useState(orderListEdit);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const originalOrder = useCallback(
    (id: string) => {
      const order = orderList.filter((order) => order.id === id)[0];
      return {
        order,
        index: orderList.indexOf(order),
      };
    },
    [orderList]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (isShowEdit) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShowEdit, handleClose]);

  const moveOrder = useCallback(
    (id: string, atIndex: number) => {
      const { index, order } = originalOrder(id);
      setOrderList(
        update(orderList, {
          $splice: [
            [index, 1],
            [atIndex, 0, order],
          ],
        })
      );
    },
    [originalOrder, setOrderList, orderList]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='relative'>
        <ButtonComponent
          disableRipple
          className='h-[30px] w-[118px]'
          onPress={handleShow}
        >
          項目編集モード
        </ButtonComponent>
        <div
          className={cn(
            'absolute right-0 top-[120%] z-10 hidden max-h-[360px] w-[260px] overflow-y-auto rounded border border-color-2rd-border bg-white py-5',
            isShowEdit && 'block'
          )}
          ref={modalRef}
        >
          <div className='flex justify-between px-5'>
            <p className='mb-[15px] text-sm font-bold leading-[17.5px]'>
              項目の表示／非表示
            </p>
            <Button
              isIconOnly
              variant='flat'
              color='primary'
              className='h-[15px] w-[15px] min-w-[15px] rounded-full'
              onClick={handleClose}
            >
              <CloseBold />
            </Button>
          </div>
          <div className='flex flex-col gap-1'>
            {orderList.map(
              (item: { label: string; show: boolean; id: string }) => (
                <OrderItem
                  key={item.id}
                  isShow={item.show}
                  label={item.label}
                  id={item.id}
                  moveOrder={moveOrder}
                  originalOrder={originalOrder}
                />
              )
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default DropdownEditOrder;

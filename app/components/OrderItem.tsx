'use client';

import { Button, cn, DropdownItem, DropdownItemProps } from '@nextui-org/react';
import React, { memo, useRef } from 'react';
import { CloseEye, Drag, OpenEye } from './svg';
import { useDrag, useDrop } from 'react-dnd';

interface Item {
  id: string;
  originalIndex: number;
}

interface Props {
  label: string;
  isShow: boolean;
  id: string;
  moveOrder: (id: string, to: number) => void;
  originalOrder: (id: string) => {
    index: number;
    order: Order;
  };
}

const OrderItemEdit = ({
  label,
  isShow,
  id,
  originalOrder,
  moveOrder,
}: Props) => {
  const refDrag = useRef<HTMLDivElement>(null);
  const refDrop = useRef<HTMLDivElement>(null);
  const originalIndex = originalOrder(id).index;
  const [{}, drag, dragPreview] = useDrag(
    () => ({
      type: 'order',
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveOrder(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveOrder]
  );

  const [, drop] = useDrop(
    () => ({
      accept: 'order',
      hover({ id: draggedId }: Item) {
        if (draggedId !== id) {
          const { index: atIndex } = originalOrder(id);
          moveOrder(draggedId, atIndex);
        }
      },
    }),
    [originalOrder, moveOrder]
  );

  drag(refDrag);
  dragPreview(refDrop);
  drop(refDrop, {});
  return (
    <div
      className={cn('flex items-center gap-[10px] px-5 hidden-scroll')}
      ref={refDrop}
    >
      <div className='cursor-grab' ref={refDrag}>
        <Drag />
      </div>
      <div className='flex flex-1 items-center justify-between border-b border-color-2rd-border'>
        <p>{label}</p>
        <Button isIconOnly variant='light' className='h-8 w-8 min-w-8'>
          {isShow ? <OpenEye /> : <CloseEye />}
        </Button>
      </div>
    </div>
  );
};

export default OrderItemEdit;

import { Chip } from '@nextui-org/react';
import React from 'react';
import { COURSE_ALLOCATION, ORDER_STATUS } from '../../constants/order.const';

type Props = {
  status: number;
  type: 'COURSE' | 'ORDER' | 'CHOICE';
  className?: string;
};

const DeliveryStatus = ({ status, type, className }: Props) => {
  const renderStatus = () => {
    switch (type) {
      case 'ORDER':
        if (status === 0) return '未完了';
        else if (status === 1) return '配送完了';
        else return 'キャンセル待ち';
      case 'COURSE':
        if (status === 0) return '未割付';
        else if (status === 1) return '確定済';
        else return '割付済';

      default:
        return '選択';
    }
  };
  return (
    <Chip
      radius='none'
      classNames={{
        base: 'bg-transparent',
        content: [
          'flex items-center justify-center h-[22px] w-[76px] rounded-[2px]',
          'border border-color-error bg-error text-[11px] font-bold leading-[11px] text-color-error',
          `${(status === ORDER_STATUS.COMPLETE || status === COURSE_ALLOCATION.CONFIRMED) && 'text-white bg-complete border-none'}`,
          `${type === 'COURSE' && status === COURSE_ALLOCATION.ALLOCATED && 'text-primary bg-secondary border-primary'}`,
          `${type === 'ORDER' && status === ORDER_STATUS.WAITING_LIST && 'text-color-label bg-color-gray border-color-border tracking-tighter'}`,
          type === 'CHOICE' &&
            'text-color-selected bg-color-gray border-color-border tracking-tighter',
          className,
        ],
      }}
    >
      {renderStatus()}
    </Chip>
  );
};

export default DeliveryStatus;

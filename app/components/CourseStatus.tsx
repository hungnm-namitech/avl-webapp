import { Chip } from '@nextui-org/react';
import React from 'react';
import { COURSE_STATUS } from '../constants/course.cont';

type Props = {
  status: number;
};

const CourseStatus = ({ status }: Props) => {
  const renderStatus = () => {
    if (status === COURSE_STATUS.COMPLETE) return '完了';
    else if (status === COURSE_STATUS.DELETE) return '削除';
    else return '未完了';
  };
  return (
    <Chip
      radius='none'
      classNames={{
        base: 'bg-transparent',
        content: [
          'flex items-center justify-center h-[22px] w-[76px] rounded-[2px]',
          'border border-color-error bg-error text-[11px] font-bold leading-[11px] text-color-error',
          `${status === COURSE_STATUS.COMPLETE && 'text-white bg-complete border-none'}`,
          `${status === COURSE_STATUS.DELETE && 'text-color-label bg-color-gray border-color-label'}`,
        ],
      }}
    >
      {renderStatus()}
    </Chip>
  );
};

export default CourseStatus;

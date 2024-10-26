import React from 'react';
import { ArrowDown } from '../svg';
import { HEIGHT_HEAD } from '../../constants/constant';

type Props = {};

const TabsCourse = () => {
  return (
    <>
      <p className='text-xs font-bold leading-[15px]'>目次</p>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
        onClick={() => {
          const basicInfo = document.getElementById('basic-info')?.offsetTop;
          if (basicInfo)
            window.scrollTo({
              top: basicInfo - HEIGHT_HEAD,
              behavior: 'smooth',
            });
        }}
      >
        <p className='leading-5'>基本情報</p>
        <div className='text-primary'>
          <ArrowDown />
        </div>
      </div>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
        onClick={() => {
          const courseInfo = document.getElementById('course-info')?.offsetTop;
          if (courseInfo)
            window.scrollTo({
              top: courseInfo - HEIGHT_HEAD,
              behavior: 'smooth',
            });
        }}
      >
        <p className='leading-5'>コース情報</p>
        <div className='text-primary'>
          <ArrowDown />
        </div>
      </div>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
        onClick={() => {
          const orderInfo = document.getElementById('order-info')?.offsetTop;
          if (orderInfo)
            window.scrollTo({
              top: orderInfo - HEIGHT_HEAD,
              behavior: 'smooth',
            });
        }}
      >
        <p className='leading-5'>受注情報</p>
        <div className='text-primary'>
          <ArrowDown />
        </div>
      </div>
      <div
        className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
        onClick={() => {
          const amountInfo = document.getElementById('amount-info')?.offsetTop;
          if (amountInfo)
            window.scrollTo({
              top: amountInfo - HEIGHT_HEAD,
              behavior: 'smooth',
            });
        }}
      >
        <p className='leading-5'>金額情報</p>
        <div className='text-primary'>
          <ArrowDown />
        </div>
      </div>
    </>
  );
};

export default TabsCourse;

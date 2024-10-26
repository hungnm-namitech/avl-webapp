'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import { useLayoutPage } from '@/app/store/layoutPage';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect } from 'react';

/**
 *
 * @page SRV0110
 */

const DeleteSuccessfully = () => {
  const { push } = useRouter();
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/course',
        text: 'コース一覧',
      },
      {
        href: 'course/delete-completion',
        text: '削除完了',
      },
    ]);
  }, [saveBreadcrumbs]);
  return (
    <div className='flex h-content-screen flex-col items-center justify-center gap-10'>
      <p className='text-[40px] font-bold'>完了しました</p>
      <ButtonComponent
        onPress={() => push('/course')}
        variant='solid'
        color='primary'
        className='h-14 w-[360px] text-base'
      >
        コース一覧に戻る
      </ButtonComponent>
    </div>
  );
};

export default DeleteSuccessfully;

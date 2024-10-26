'use client';

import { useRouter } from 'next-nprogress-bar';
import React from 'react';
import NotificationPage from '@/app/components/common/NotificationPage';
import LinkRedirect from '@/app/components/common/LinkRedirect';

/**
 *
 * @page ORD0206
 */

const CreateSuccessfully = () => {
  const { push } = useRouter();
  return (
    <NotificationPage
      breadcrumbs={[
        { href: '/order', text: 'ホーム' },
        { href: '/order/master', text: '受注マスタ' },
        { href: '/order/master/create-successfully', text: '登録' },
      ]}
      title='受注マスタ作成が完了しました'
      buttonTitle='受注マスタ一覧に戻る'
      onPress={() => push('/order/master')}
      extraContent={
        <LinkRedirect
          href={'/order/master/create'}
          className='text-sm text-primary hover:underline'
        >
          続けて受注マスタを作成
        </LinkRedirect>
      }
    />
  );
};

export default CreateSuccessfully;

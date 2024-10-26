import { useRouter } from 'next-nprogress-bar';
import NotificationPage from '@/app/components/common/NotificationPage';
import React from 'react';
import LinkRedirect from '../common/LinkRedirect';

type Props = { orderType: string };

const OrderCreateSuccessfully = ({ orderType }: Props) => {
  const { push } = useRouter();
  const path = `/order/${orderType}`;

  return (
    <NotificationPage
      breadcrumbs={[
        { href: '/order', text: 'ホーム' },
        { href: `${path}`, text: '受注一覧' },
        { href: '', text: '受注完了' },
      ]}
      title='新規登録が完了しました'
      buttonTitle='受注一覧に戻る'
      onPress={() => push(`${path}`)}
      extraContent={
        <LinkRedirect
          href={`${path}/create`}
          className='text-sm text-primary hover:underline'
        >
          続けて受注を作成
        </LinkRedirect>
      }
    />
  );
};

export default OrderCreateSuccessfully;

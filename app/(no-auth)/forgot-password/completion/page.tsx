'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import { Image } from '@nextui-org/react';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

/**
 *
 * @page CMN0103
 */
const ForgotPassComplete = () => {
  const { push } = useRouter();
  return (
    <div className='flex min-h-screen'>
      <div className='flex flex-1 flex-col items-center justify-center gap-0'>
        <Image
          src='/images/logo-no-auth.png'
          alt='logo-no-auth'
          className='mb-[56px]'
          classNames={{ img: 'rounded-none' }}
        />
        <p className='text-2xl font-bold leading-[30px]'>パスワード再発行</p>
        <p className='mt-6 text-center text-xs leading-[18px]'>
          パスワード変更用のメールを送信しました
        </p>
        <div className='mt-6 h-[203px] w-[360px] bg-color-gray p-5 text-xs'>
          <p className='font-bold'>メールが届かない場合</p>
          <div className='mt-3 flex flex-col gap-2 leading-[15px]'>
            <div className='flex gap-3'>
              •
              <p>
                迷惑メールに振り分けられていたり、フィルターや転送設定によって受信ボックス以外の場所に保管されていないカゴ確認ください。
              </p>
            </div>
            <div className='flex gap-3'>
              •
              <p>
                メール送信に時間がかかる場合がございます。数分待った上で、メールが届いているか再度ご確認ください。
              </p>
            </div>
            <div className='flex gap-3'>
              •
              <p>
                ご使用のメールアドレスが正しいかどうか確認してください。正しくない場合はメールアドレスの再設定をお願いします。
              </p>
            </div>
          </div>
        </div>
        <ButtonComponent
          className='mt-12 h-[56px] w-[360px] bg-primary text-base text-white'
          onPress={() => push('/login')}
        >
          ログイン画面に戻る
        </ButtonComponent>
      </div>
      <div className='w-[55%] bg-no-auth bg-cover bg-no-repeat'></div>
    </div>
  );
};

export default ForgotPassComplete;

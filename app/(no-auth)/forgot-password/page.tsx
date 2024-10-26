'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import { axiosNoAuth } from '@/app/libs/axios';
import {
  IFormForgotPassword,
  schemaForgotPassword,
} from '@/app/utils/schemas/reset-password';
import { zodResolver } from '@hookform/resolvers/zod';
import { Image } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import React, { use } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useRouter } from 'next-nprogress-bar';
import { FORGOT_PASSWORD, MESSAGE_ERROR } from '@/app/constants/constant';

/**
 *
 * @page CMN0102
 */
export default function ForgotPassword() {
  const { push } = useRouter();

  const { control, handleSubmit } = useForm<IFormForgotPassword>({
    defaultValues: { email: '' },
    resolver: zodResolver(schemaForgotPassword),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IFormForgotPassword> = (data) => {
    resetPassword(data);
  };

  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: async (data: IFormForgotPassword) => {
      const result = axiosNoAuth({
        url: `/auth/reset-password`,
        method: 'POST',
        data: data,
      });
      return result;
    },
    onSuccess() {
      push('/forgot-password/completion');
    },
    onError: (error: AxiosError<{ message: string }>) => {
      if (error.status === 400) {
        toast.error(FORGOT_PASSWORD.MESSAGE_NOT_FOUND_EMAIL);
      } else if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(MESSAGE_ERROR);
      }
    },
  });
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
        <p className='mt-4 text-center text-xs leading-[18px]'>
          メールアドレスを入力のうえ、送信ボタンを押してください。
          <br />
          パスワード再発行結果を記載したメールをお送りします。
        </p>
        <form className='mt-6 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState }) => (
              <div className='relative'>
                <InputComponent
                  placeholder='メールアドレスを入力してください'
                  className='w-[360px]'
                  {...field}
                  isError={!!fieldState.error}
                  isDisabled={isPending}
                />
                {fieldState.error && (
                  <p className='absolute mt-2 text-xs text-color-error'>
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <ButtonComponent
            type='submit'
            isLoading={isPending}
            className='mt-12 h-[56px] w-[360px] bg-primary text-base text-white'
          >
            送信
          </ButtonComponent>
        </form>
      </div>

      <div className='w-[55%] bg-no-auth bg-cover bg-no-repeat'></div>
    </div>
  );
}

'use client';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import { LOGIN } from '@/app/constants/constant';
import { IFormLogin, schemaLogin } from '@/app/utils/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { Image } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import LinkRedirect from '@/app/components/common/LinkRedirect';

/**
 *
 * @page CMN0101
 */
export default function Login() {
  const { control, handleSubmit, getValues, setValue } = useForm<IFormLogin>({
    defaultValues: { userIdOrEmail: '', password: '' },
    resolver: zodResolver(schemaLogin),
    mode: 'all',
  });
  const [isShowPass, setIsShowPass] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const router = useRouter();

  const handleShowPass = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsShowPass(!isShowPass);
  };

  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    if (isRemember) {
      const dataLoginRemember = {
        userIdOrEmail: getValues('userIdOrEmail'),
        password: getValues('password'),
        isRemember,
      };
      localStorage.setItem(
        'dataLoginRemember',
        JSON.stringify(dataLoginRemember)
      );
    } else {
      localStorage.removeItem('dataLoginRemember');
    }
    await login(data);
  };

  const {
    mutate: login,
    isPending,
    data: dataLogin,
  } = useMutation({
    mutationFn: async (data: Object) => {
      const result = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      return result;
    },
  });

  useEffect(() => {
    const dataLoginRemember = localStorage.getItem('dataLoginRemember');
    if (dataLoginRemember && JSON.parse(dataLoginRemember).isRemember) {
      setValue('userIdOrEmail', JSON.parse(dataLoginRemember).userIdOrEmail);
      setValue('password', JSON.parse(dataLoginRemember).password);
      setIsRemember(JSON.parse(dataLoginRemember).isRemember);
    }

    if (dataLogin?.ok) {
      router.push('/dashboard');
    }
    if (dataLogin?.error) {
      toast.error(LOGIN.MESSAGE_LOGIN_FAILED);
    }
  }, [dataLogin, getValues, router, setValue]);

  return (
    <div className='flex min-h-screen'>
      <div className='flex flex-1 flex-col items-center justify-center gap-0'>
        <Image
          classNames={{ img: 'rounded-none' }}
          src='/images/logo-no-auth.png'
          alt='logo-no-auth'
          className='mb-[56px]'
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='userIdOrEmail'
            control={control}
            render={({ field, fieldState }) => (
              <div className='relative'>
                <InputComponent
                  label='ログインID'
                  placeholder='IDを入力してください'
                  className='w-[360px]'
                  {...field}
                  isDisabled={isPending}
                  isError={!!fieldState.error}
                />
                {fieldState.error && (
                  <p className='absolute mt-2 select-none text-xs text-color-error'>
                    {fieldState.error?.message}
                  </p>
                )}
              </div>
            )}
          />
          <div className='relative mt-12'>
            <Controller
              name='password'
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <InputComponent
                    label='パスワード'
                    className='w-[360px]'
                    type={isShowPass ? 'text' : 'password'}
                    {...field}
                    isDisabled={isPending}
                    classNames={{
                      input: isShowPass ? 'pr-[135px]' : 'pr-[125px]',
                    }}
                    isError={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <p className='absolute mt-2 select-none text-xs text-color-error'>
                      {fieldState.error?.message}
                    </p>
                  )}
                </>
              )}
            />
            <div
              className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
              onClick={(e) => handleShowPass(e)}
            >
              {isShowPass ? (
                <span className='select-none text-sm text-primary'>
                  パスワードを非表示
                </span>
              ) : (
                <span className='select-none text-sm text-primary'>
                  パスワードを表示
                </span>
              )}
            </div>
          </div>
          <ButtonComponent
            type='submit'
            className='mb-[20px] mt-[48px] h-[56px] w-[360px] bg-primary text-base leading-[22px] text-white'
            isLoading={isPending}
          >
            ログイン
          </ButtonComponent>
        </form>

        <CheckboxComponent
          isDisabled={isPending}
          onValueChange={setIsRemember}
          isSelected={isRemember}
        >
          ログイン情報を保存
        </CheckboxComponent>
        <LinkRedirect
          href='/forgot-password'
          className='mt-[20px] text-sm text-primary underline-offset-2 hover:underline'
        >
          パスワードをお忘れの場合
        </LinkRedirect>
      </div>

      <div className='w-[55%] bg-no-auth bg-cover bg-no-repeat'></div>
    </div>
  );
}

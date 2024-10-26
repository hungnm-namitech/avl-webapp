'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import Toast from '@/app/components/common/Toast';
import TableCourseList from '@/app/components/course/TableCourseList';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import { ArrowDown, Magnifying } from '@/app/components/svg';
import { useLayoutPage } from '@/app/store/layoutPage';
import { schemaCourseList } from '@/app/utils/schemas/course';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

type Props = {};

type IFormCourseList = z.infer<typeof schemaCourseList>;

/**
 *
 * @page SRV0102
 */

const CourseList = (props: Props) => {
  const [isShowSearch, setIsShowSearch] = useState(false);
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
    ]);
  }, [saveBreadcrumbs]);

  const { control, handleSubmit, watch } = useForm<IFormCourseList>({
    resolver: zodResolver(schemaCourseList),
  });
  const handleCreateCourse = (title: string) => {
    toast(<Toast title={title} className='w-[400px]' />, {
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: -15,
        width: 420,
      },
      toastId: title,
    });
  };
  const onSubmit: SubmitHandler<IFormCourseList> = (data) => {
    console.log({ data });
  };
  const animals = [
    {
      label: 'Cat',
      value: 'cat',
    },
    {
      label: 'Dog',
      value: 'dog',
    },
    {
      label: 'Elephant',
      value: 'elephant',
    },
    { label: 'Lion', value: 'lion' },
    { label: 'Tiger', value: 'tiger' },
    {
      label: 'Giraffe',
      value: 'giraffe',
    },
  ];

  return (
    <div className='flex h-full flex-col px-8 py-4'>
      <div className='rounded border border-color-border px-5 py-3'>
        <div className='flex justify-between border-b border-color-border pb-[5px] text-sm font-bold'>
          <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
              <Magnifying />
              <span className='text-color-label'>絞り込み検索</span>
            </div>
            <div
              className='flex cursor-pointer select-none items-center gap-2'
              onClick={() => setIsShowSearch(!isShowSearch)}
            >
              <span className='text-primary'>
                {isShowSearch ? '検索条件を閉じる' : '検索条件を開く'}
              </span>
              <div className={cn(isShowSearch && 'rotate-180')}>
                <div className='text-primary'>
                  <ArrowDown />
                </div>
              </div>
            </div>
          </div>
          <ButtonComponent
            className='h-[30px] w-[118px]'
            onClick={() => handleCreateCourse('コース一覧に反映しました')}
          >
            項目編集モード
          </ButtonComponent>
        </div>
        {isShowSearch && (
          <form className='mt-2 flex gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-1 flex-col gap-2 text-xs font-bold leading-[15px] text-color-label'>
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <span>種別</span>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[222.5px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>積込先</span>
                    <span>(エリア)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[200.5px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>積込先</span>
                    <span>(都道府県)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[188.5px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>積込先</span>
                    <span>(市区町村)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[188.5px] pc:w-[200px]'
                  />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>荷卸先</span>
                    <span>(エリア)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[164px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>荷卸先</span>
                    <span>(都道府県)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[152px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <p className='flex flex-col items-center'>
                    <span>荷卸先</span>
                    <span>(市区町村)</span>
                  </p>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[152px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center'>
                  <span className='mr-2'>積込日</span>
                  <Controller
                    control={control}
                    name='loadingDateStart'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-9 w-[144px] text-sm pc:w-[200px]'
                          selected={value}
                          selectsStart
                          startDate={watch('loadingDateStart')}
                          endDate={watch('loadingDateEnd')}
                          maxDate={watch('loadingDateEnd')}
                          {...field}
                        />
                        {fieldState.error && (
                          <p className='mt-2 text-xs text-color-error'>
                            {fieldState.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <span className='mx-2'>〜</span>
                  <Controller
                    control={control}
                    name='loadingDateEnd'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-9 w-[144px] text-sm pc:w-[200px]'
                          selected={value}
                          selectsEnd
                          startDate={watch('loadingDateStart')}
                          endDate={watch('loadingDateEnd')}
                          minDate={watch('loadingDateStart')}
                          {...field}
                        />
                        {fieldState.error && (
                          <p className='mt-2 text-xs text-color-error'>
                            {fieldState.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <span className='mr-2'>荷卸日</span>
                  <Controller
                    control={control}
                    name='unloadingDateStart'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-9 w-[144px] text-sm pc:w-[200px]'
                          selected={value}
                          selectsStart
                          startDate={watch('unloadingDateStart')}
                          endDate={watch('unloadingDateEnd')}
                          maxDate={watch('unloadingDateEnd')}
                          {...field}
                        />
                        {fieldState.error && (
                          <p className='mt-2 text-xs text-color-error'>
                            {fieldState.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                  <span className='mx-2'>〜</span>
                  <Controller
                    control={control}
                    name='unloadingDateEnd'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-9 w-[144px] text-sm pc:w-[200px]'
                          selected={value}
                          selectsEnd
                          startDate={watch('unloadingDateStart')}
                          endDate={watch('unloadingDateEnd')}
                          minDate={watch('unloadingDateStart')}
                          {...field}
                        />
                        {fieldState.error && (
                          <p className='mt-2 text-xs text-color-error'>
                            {fieldState.error?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span>依頼先</span>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[167px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span>ステータス</span>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[152px] pc:w-[200px]'
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span>SSCV連携</span>
                  <AutocompleteComponent
                    items={animals}
                    className='h-9 w-[152px] pc:w-[200px]'
                  />
                </div>
              </div>
              <div className='mt-[7px] flex items-center'>
                <p className='w-[73px]'>アラート</p>
                <div className='flex gap-5'>
                  <CheckboxComponent
                    classNames={{
                      label: 'text-[18px] font-normal text-color-base',
                    }}
                  >
                    承認待ち有
                  </CheckboxComponent>
                  <CheckboxComponent
                    classNames={{
                      label: 'text-[18px] font-normal text-color-base',
                    }}
                  >
                    支払運賃未入力有
                  </CheckboxComponent>
                  <CheckboxComponent
                    classNames={{
                      label: 'text-[18px] font-normal text-color-base',
                    }}
                  >
                    ドライバー未入力有
                  </CheckboxComponent>
                  <CheckboxComponent
                    classNames={{
                      label: 'text-[18px] font-normal text-color-base',
                    }}
                  >
                    車番未入力有
                  </CheckboxComponent>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-[15px]'>
              <ButtonComponent
                startContent={<Magnifying color='white' />}
                className='h-[30px] w-[118px] bg-color-selected text-white'
              >
                絞り込み
              </ButtonComponent>
              <ButtonComponent
                variant='solid'
                color='primary'
                className='h-[30px] w-[118px]'
              >
                重複チェック
              </ButtonComponent>
            </div>
          </form>
        )}
      </div>
      <div className='mt-4 flex-1'>
        <TableCourseList />
      </div>
      <div className='flex justify-between'>
        <p className='text-sm leading-[17.5px]'>50件表示 / 1230件中</p>
        <PaginationComponent />
      </div>
      <div className='fixed bottom-16 flex h-[60px] w-[83%] items-center rounded border border-color-2rd-border bg-white px-[17px] shadow-option'>
        <span className='font-bold leading-[22.5px] text-primary'>
          キャンセル
        </span>
        <div className='ml-40 flex gap-6'>
          <div className='flex items-center gap-1 text-sm font-bold'>
            <span>選択した</span>
            <span className='text-[18px] font-bold leading-[22.5px]'>1</span>
            <span>件の受注を選択中</span>
          </div>
          <ButtonComponent className='w-[160px] bg-primary text-white'>
            SSCV連携
          </ButtonComponent>
          <ButtonComponent
            variant='solid'
            className='w-[160px] bg-color-error text-white'
          >
            削除
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default CourseList;

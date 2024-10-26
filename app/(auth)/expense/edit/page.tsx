'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import { CloseBold, File } from '@/app/components/svg';
import TitleComponent from '@/app/components/common/TitleComponent';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IExpense, schemaExpense } from '@/app/utils/schemas/expense';
import StickyAction from '@/app/components/order/StickyAction';
import { useLayoutPage } from '@/app/store/layoutPage';
import { Button } from '@nextui-org/react';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {};

const EditExpense = (props: Props) => {
  const [file, setFile] = useState('');
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/expense',
        text: '経費一覧',
      },
      {
        href: '/expense/create',
        text: '経費作成',
      },
    ]);
  }, [saveBreadcrumbs]);
  const labelSticky: LabelSticky[] = [
    {
      text: '入力',
      selected: true,
    },
    {
      text: '確認',
      selected: false,
    },
    {
      text: '完了',
      selected: false,
    },
  ];

  const linkHref: LinkHref[] = [
    {
      text: '基本情報',
      link: 'basic_information',
    },
  ];
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
  const { control, handleSubmit, getValues, setValue } = useForm<IExpense>({
    resolver: zodResolver(schemaExpense),
    mode: 'all',
    defaultValues: {
      isPettySettlement: false,
    },
  });

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: any) => void
  ) => {
    const { files } = e.target;
    if (files) {
      const pathFile = files[0];
      setFile(pathFile.name);
      onChange(pathFile.name);
    }
  };

  const handleDropFile = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const pathFile = e.dataTransfer.files[0];
    if (pathFile) {
      setFile(pathFile.name);
      setValue('file', pathFile.name);
    }
  };
  const onSubmit: SubmitHandler<IExpense> = (data) => {
    console.log({ data });
  };
  return (
    <div className='p-10 pb-16 pt-7'>
      <p className='text-2xl font-bold'>経費編集</p>
      <div className='mt-[30px] flex gap-9'>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-1 flex-col gap-10'
          >
            <TitleComponent content='基本情報' id='basic_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    経費分類
                  </p>
                  <Controller
                    name='expenseCategory'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        items={animals}
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    経費種別
                  </p>
                  <Controller
                    name='expenseType'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        items={animals}
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    金額（税込）
                  </p>
                  <Controller
                    name='priceTax'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        type='number'
                        aria-label='price'
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='grid grid-cols-3 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    小口精算
                  </p>
                  <Controller
                    name='isPettySettlement'
                    control={control}
                    render={({ field }) => (
                      <CheckboxComponent
                        className='col-span-2'
                        defaultSelected={getValues('isPettySettlement')}
                        checked={field.value || false}
                        {...field}
                        value={field.name}
                      >
                        現金で立て替えて支払をした場合、
                        チェックを入れてください
                      </CheckboxComponent>
                    )}
                  />
                </div>
              </div>

              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>取引先</p>
                <Controller
                  control={control}
                  name='businessPartner'
                  render={({ field }) => (
                    <AutocompleteComponent
                      items={animals}
                      aria-label='supplier'
                      className='col-span-3 w-auto'
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>取引日</p>
                  <Controller
                    control={control}
                    name='transactionDate'
                    render={({ field: { value, ...field } }) => (
                      <DatePickerComponent
                        selected={value}
                        className='h-12 w-full'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    コースID
                  </p>
                  <Controller
                    name='courseId'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        items={animals}
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>

              <div className='grid min-h-[61px] grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    担当支店
                  </p>
                  <p>大阪支店</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    支店担当者
                  </p>
                  <p>田中 太郎</p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    該当稟議番号
                  </p>
                  <Controller
                    name='applicableDecisionNumber'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        type='number'
                        aria-label='customer'
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    フル車番
                  </p>
                  <Controller
                    name='carNumber'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        items={animals}
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    ETCカード番号
                  </p>
                  <Controller
                    name='etcCardNumber'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        aria-label='decisionNumber'
                        className='w-auto'
                        disabled
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    燃料カード番号
                  </p>
                  <Controller
                    name='fuelCardNumber'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        aria-label='fuelNumber'
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>備考</p>
                <Controller
                  name='remarks'
                  control={control}
                  render={({ field }) => (
                    <InputComponent
                      aria-label='remarks'
                      className='col-span-3 w-auto'
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='mb-8 grid grid-cols-4 items-center gap-5'>
                <p className='font-bold leading-5 text-color-label'>添付資料</p>
                {!!file && (
                  <div className='col-span-3 flex items-center gap-3'>
                    <p className='font-bold leading-5 text-primary'>{file}</p>
                    <Button
                      isIconOnly
                      variant='flat'
                      color='primary'
                      className='h-[15px] w-[15px] min-w-[15px] rounded-full'
                      onClick={() => setFile('')}
                    >
                      <CloseBold />
                    </Button>
                  </div>
                )}
              </div>
              <label
                className='flex h-[208px] cursor-pointer flex-col items-center justify-center gap-[9px] rounded border-2 border-dashed border-color-selected'
                htmlFor='upload-file'
                onDrop={(e) => handleDropFile(e)}
                onDragOver={(e) => e.preventDefault()}
              >
                <File />
                <p className='w-52 font-bold leading-5'>
                  ここにドラッグ＆ドロップ または
                  <span className='text-color-selected'>ファイルを選択</span>
                </p>
                <div className='text-xs leading-[18px] tracking-[0.005em] text-color-label'>
                  ※ PDF、JPEG、PNG、Excelのみアップロード可能
                  <br /> ※ 5個までアップロード可能です
                </div>
                <Controller
                  control={control}
                  name='file'
                  render={({ field: { onChange, value, ...field } }) => (
                    <input
                      {...field}
                      aria-label='file'
                      type='file'
                      id='upload-file'
                      hidden
                      onChange={(e) => handleUpload(e, onChange)}
                    />
                  )}
                />
              </label>
            </div>
            <div className='mt-16 flex justify-center gap-[19px]'>
              <ButtonComponent className='h-[54px] w-56'>
                キャンセル
              </ButtonComponent>
              <ButtonComponent
                className='h-[54px] w-56 bg-primary text-white'
                type='submit'
              >
                内容を確認
              </ButtonComponent>
            </div>
          </form>
        </div>
        <div className='relative min-w-[225px]'>
          <div className='fixed'>
            <StickyAction labelSticky={labelSticky} LinkHref={linkHref} />
            <div className='flex flex-col gap-2'>
              <ButtonComponent className='h-[54px] w-full bg-primary text-white'>
                内容確認
              </ButtonComponent>

              <ButtonComponent className='h-[54px] w-full'>
                キャンセル
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;

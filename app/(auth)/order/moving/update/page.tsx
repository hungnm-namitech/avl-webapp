'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import StickyAction from '@/app/components/order/StickyAction';
import { ArrowDown, Bin, Home, Plus } from '@/app/components/svg';
import TitleComponent from '@/app/components/common/TitleComponent';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { schemaOrderMoving } from '@/app/utils/schemas/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next-nprogress-bar';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

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

type Props = {};

type IFormOrderMovingUpdate = z.infer<typeof schemaOrderMoving>;

/**
 *
 * @page ORD0108
 */

const UpdateOrderMoving = (props: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/moving',
        text: '受注マスタ',
      },
      {
        href: '/order/moving/update',
        text: '受注編集',
      },
    ]);
  }, [saveBreadcrumbs]);
  const [file, setFile] = useState('');
  const { push } = useRouter();
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
  const { control, handleSubmit } = useForm<IFormOrderMovingUpdate>({
    resolver: zodResolver(schemaOrderMoving),
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

  const onSubmit: SubmitHandler<IFormOrderMovingUpdate> = (data) => {
    console.log({ data });
  };

  return (
    <div className='p-10 pb-16 pt-7'>
      <div className='flex items-center gap-4 font-bold'>
        <span className='text-2xl leading-[30px]'>受注作成</span>
        <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
          <Home /> <span>引越</span>
        </div>
      </div>
      <div className='mt-[30px] flex gap-9'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-1 flex-col gap-10'
        >
          <div>
            <TitleComponent content='基本情報' id='basic_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>受注日</p>
                  <p>23/08/06 (日)</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    関連受注番号
                  </p>
                  <Controller
                    name='orderNumber'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid min-w-[61px] grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    得意先名
                  </p>
                  <p>アート京都北支店</p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    受注支店
                  </p>
                  <p>大阪北支店</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    担当支店
                  </p>
                  <Controller
                    name='branchInCharge'
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
                    受注担当者
                  </p>
                  <Controller
                    name='orderTaker'
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
                    配車担当者
                  </p>
                  <Controller
                    name='dispatcher'
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
                    請求支店
                  </p>
                  <Controller
                    name='billBranch'
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
                  <p className='font-bold leading-5 text-color-label'>小分類</p>
                  <Controller
                    name='subcategory'
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
                    要望車格オプション
                  </p>
                  <div className='flex gap-5'>
                    <Controller
                      name='desiredVehicleClass'
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <AutocompleteComponent items={animals} className='w-auto' />
                  <InputComponent className='w-auto' />
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    受付番号
                  </p>
                  <p>7708-342491-01-1</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>顧客名</p>
                  <p>中村 博</p>
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>備考</p>
                <Controller
                  name='remarks'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-auto' {...field} />
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <TitleComponent content='積込情報' id='loading_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先作業店
                  </p>
                  <p>アード京都北支店</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先集約店
                  </p>
                  <Controller
                    name='loadingConsolidationStore'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先（エリア）
                  </p>
                  <p>近畿</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先（都道府県）
                  </p>
                  <p>滋賀県</p>
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  積込先（市区町村）
                </p>
                <p className='col-span-3'>米原市</p>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    アポ時間
                  </p>
                  <p>23/08/13 10:00</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='mr-5 font-bold leading-5 text-color-label'>
                    積込日
                  </p>
                  <Controller
                    name='loadingDate'
                    control={control}
                    render={({
                      field: { onChange, value, ...field },
                      fieldState,
                    }) => (
                      <div className='flex flex-col'>
                        <DatePickerComponent
                          selected={value}
                          className='h-12 pc:w-full'
                          wrapperClassName='w-full'
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
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  引越作業注記
                </p>
                <p className='col-span-3'>23/08/13 10:00ごろ 10:00～12:00</p>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  顧客連絡先
                </p>
                <p className='col-span-3'>03-1234-5678</p>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>住所</p>
                <p className='col-span-3'>
                  西円寺８０７ Ｙ＇ｓＧＡＲＡＧＥ西円寺１号室
                </p>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>注意事項</p>
                <Controller
                  name='notes'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-auto' {...field} />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='荷卸情報' id='unloading_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先作業店
                  </p>
                  <p>アート北九州支店</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先集約店
                  </p>
                  <Controller
                    name='unloadingConsolidationStore'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先（エリア）
                  </p>
                  <p>九州</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先(都道府県)
                  </p>
                  <p>米原市</p>
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先（市区町村）
                  </p>
                  <p>福津市</p>
                </div>
                <div className='w-auto'></div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    アポ時間
                  </p>
                  <p>23/08/14 10:00</p>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='mr-5 font-bold leading-5 text-color-label'>
                    荷卸日
                  </p>
                  <Controller
                    name='unloadingDate'
                    control={control}
                    render={({ field: { value, ...field } }) => (
                      <DatePickerComponent
                        selected={value}
                        className='h-12'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  引越作業注記
                </p>
                <p className='col-span-3'>23/08/13 10:00ごろ 10:00～12:00</p>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  顧客連絡先
                </p>
                <p className='col-span-3'>03-1234-5678</p>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>住所</p>
                <p className='col-span-3'>
                  西円寺８０７ Ｙ＇ｓＧＡＲＡＧＥ西円寺１号室
                </p>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>注意事項</p>
                <Controller
                  name='unloadingNotes'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-auto' {...field} />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='配車情報' id='dispatch_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>依頼先</p>
                <Controller
                  name='requestedBy'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteComponent
                      isDisabled
                      items={animals}
                      className='col-span-3 w-auto'
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='詳細情報' id='more_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>距離</p>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='distance'
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className='flex flex-col'>
                          <InputComponent
                            type='number'
                            className='w-auto'
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
                    <span className='font-bold leading-5'>km</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>立米</p>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='cubic'
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className='flex flex-col'>
                          <InputComponent className='w-auto' {...field} />
                          {fieldState.error && (
                            <p className='mt-2 text-xs text-color-error'>
                              {fieldState.error?.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                    <span className='font-bold leading-5'>m3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='金額情報' id='amount_information' />
            <div className='mt-8 flex flex-col gap-2 pr-5'>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                基本料金
              </p>
              <div className='grid grid-cols-6 items-center gap-5'>
                <div className='col-span-1 flex items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    運賃
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <Controller
                  name='fareExplanation'
                  control={control}
                  render={({ field }) => (
                    <InputComponent
                      className='col-span-2 w-auto'
                      {...field}
                      placeholder='備考欄'
                      classNames={{
                        input: 'text-base placeholder:text-color-2rd-border',
                      }}
                    />
                  )}
                />
                <Controller
                  name='freightUnitPrice'
                  control={control}
                  render={({ field: { value, ...field } }) => (
                    <InputComponent
                      type='number'
                      value={value}
                      className='col-span-1 w-auto'
                      {...field}
                    />
                  )}
                />
                {/* <div className='col-span-1'></div>
                <div className='col-span-1'></div> */}
              </div>
              <p className='mt-2 border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                付帯料金
              </p>
              <div className='grid grid-cols-6 gap-5'>
                <div className='col-span-1 flex items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    高速代
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <InputComponent
                  className='col-span-2 w-auto'
                  placeholder='備考欄'
                  classNames={{
                    input: 'text-base placeholder:text-color-2rd-border',
                  }}
                />
                <InputComponent className='col-span-1 w-auto' />
                <div className='flex items-center gap-5 text-sm'>
                  <p className='flex-1 text-primary'>高速代_20240510.png</p>
                  <div className='flex items-center'>
                    <Button
                      variant='light'
                      className='w-18 h-7 min-h-7 text-sm text-color-error'
                      radius='sm'
                    >
                      書類削除
                    </Button>
                    <Button isIconOnly variant='light'>
                      <Bin />
                    </Button>
                  </div>
                </div>
              </div>
              <div className='mt-2 grid grid-cols-6 items-center gap-5'>
                <div className='col-span-1 flex items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    待機料
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <InputComponent
                  className='col-span-2 w-auto'
                  placeholder='備考欄'
                  classNames={{
                    input: 'text-base placeholder:text-color-2rd-border',
                  }}
                />
                <InputComponent className='col-span-1 w-auto' />
                {!!file && <span className='text-sm text-primary'>{file}</span>}
                <label className='' htmlFor='upload-file'>
                  <div className='col-span-1 flex h-9 cursor-pointer items-center justify-center gap-[10px] rounded border border-primary text-sm font-bold text-primary shadow-btn'>
                    <div className='text-primary'>
                      <Plus />
                    </div>
                    添付書類
                  </div>

                  <Controller
                    control={control}
                    name='additionalChargeFile'
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
                {/* <div className='col-span-1'></div> */}
                <div className='col-span-1 flex justify-end'>
                  <Button isIconOnly variant='light'>
                    <Bin />
                  </Button>
                </div>
              </div>
              <div className='flex gap-[30px]'>
                <ButtonComponent
                  className='ml-[-20px] w-fit border-none shadow-none'
                  variant='light'
                  startContent={
                    <div className='text-primary'>
                      <Plus />
                    </div>
                  }
                >
                  内訳を追加
                </ButtonComponent>
                <ButtonComponent
                  className='w-fit border-none shadow-none'
                  variant='light'
                  startContent={
                    <div className='text-primary'>
                      <Plus />
                    </div>
                  }
                >
                  内訳を追加
                </ButtonComponent>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>売上金額合計</p>
                <Controller
                  name='billingDate'
                  control={control}
                  render={({ field }) => (
                    <InputComponent
                      disabled
                      className='max-w-[193px]'
                      {...field}
                    />
                  )}
                />
              </div>
              <div className='mt-5 grid grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    請求基準日
                  </p>
                  <Controller
                    name='subcategory'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    請求締日
                  </p>
                  <Controller
                    name='unloadingNotes'
                    control={control}
                    render={({ field }) => (
                      <InputComponent disabled className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='mt-7 flex justify-center gap-6'>
            <ButtonComponent
              className='h-[54px] w-56'
              onClick={() => push('/order-list/moving')}
            >
              キャンセル
            </ButtonComponent>
            <ButtonComponent
              type='submit'
              className='h-[54px] w-56 bg-primary text-white'
            >
              内容確認
            </ButtonComponent>
          </div>
        </form>
        <div className='relative min-w-[225px]'>
          <div className='fixed'>
            <StickyAction labelSticky={labelSticky} LinkHref={linkHref} />
            <div className='flex flex-col gap-2'>
              <ButtonComponent
                className='h-[54px] w-full bg-primary text-base text-white'
                onClick={handleSubmit(onSubmit)}
              >
                内容確認
              </ButtonComponent>
              <ButtonComponent className='h-[54px] w-full text-base'>
                キャンセル
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderMoving;

'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import StickyAction from '@/app/components/order/StickyAction';
import { ArrowDown, Bin, Home, Plus } from '@/app/components/svg';
import TitleComponent from '@/app/components/common/TitleComponent';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { schemaOrderLogistic } from '@/app/utils/schemas/order';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import React, { useEffect } from 'react';
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

type IOrder = z.infer<typeof schemaOrderLogistic>;

/**
 *
 * @page ORD0106
 */

const EditOrderLogistic = (props: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);

  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/logistic',
        text: '受注一覧',
      },
      {
        href: '/order/logistic/edit',
        text: '編集',
      },
    ]);
  }, [saveBreadcrumbs]);

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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>({
    resolver: zodResolver(schemaOrderLogistic),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<IOrder> = (data) => {
    console.log({ data });
  };

  return (
    <div className='p-10 pb-16 pt-7'>
      <div className='flex items-center gap-4 font-bold'>
        <span className='text-2xl leading-[30px]'>受注編集</span>
        <span className='text-color-label'>受注番号</span>
        <span className='text-2xl leading-[30px]'>0012572100</span>
        <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
          <Home /> <span>引越</span>
        </div>
      </div>
      <div className='mt-[30px] flex gap-9'>
        <form
          className='flex flex-1 flex-col gap-10 pc:max-w-full'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <TitleComponent content='基本情報' id='basic_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>受注日</p>
                  <p className=''>23/08/06 (日)</p>
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    得意先名
                  </p>
                  <Controller
                    name='regularCustomer'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        className='w-auto'
                        items={animals}
                      />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    受注支店
                  </p>
                  <Controller
                    name='orderBranch'
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
                        className='w-auto'
                        items={animals}
                      />
                    )}
                  />
                </div>
                <div className='w-auto'></div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
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
                <div className='flex-1 border-b border-color-border pb-3'>
                  <div className='grid grid-cols-2 gap-6'>
                    <p>貸切</p>
                    <Controller
                      name='isExclusive'
                      control={control}
                      render={({ field }) => (
                        <CheckboxComponent
                          checked={field.value || false}
                          {...field}
                          value={field.name}
                        >
                          貸切り
                        </CheckboxComponent>
                      )}
                    />
                  </div>
                  <p className='text-xs font-[350px] leading-[15px]'>
                    ※貸切の場合、配車担当者を入力すると同時にコースも登録されます。
                    <br />
                    　配車担当者の入力を行うと依頼先の協力会社も設定が可能です。
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    要望車格オプション
                  </p>
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <AutocompleteComponent items={animals} className='w-auto' />
                  <InputComponent className='w-auto' />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    要望台数
                  </p>
                  <Controller
                    name='unitRequested'
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
                    お客様関連ID①
                  </p>

                  <Controller
                    name='customerId1'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    お客様関連ID②
                  </p>
                  <Controller
                    name='customerId2'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
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
                    <InputComponent className='col-span-3 w-full' {...field} />
                  )}
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込完了時刻
                  </p>
                  <Controller
                    name='loadingCompletionTime'
                    control={control}
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div>
                        <DatePickerComponent
                          selected={value}
                          className='h-12'
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸完了時刻
                  </p>
                  <Controller
                    name='unloadingCompletionTime'
                    control={control}
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div>
                        <DatePickerComponent
                          selected={value}
                          className='h-12'
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
              <div className='grid grid-cols-4 gap-5'>
                <p className='flex items-center border-b border-color-border pb-3 font-bold leading-5 text-color-label'>
                  添付資料
                </p>
                <div className='col-span-3 flex flex-col gap-[27px]'>
                  <div className='flex items-center gap-5'>
                    <span className='text-primary'>受領書_20240510.png</span>
                    <Button
                      variant='light'
                      className='h-7 min-h-7 w-[60px] text-sm text-color-error'
                      radius='sm'
                    >
                      書類削除
                    </Button>
                  </div>
                  <ButtonComponent
                    className='w-fit'
                    startContent={
                      <div className='text-primary'>
                        <Plus />
                      </div>
                    }
                  >
                    添付書類
                  </ButtonComponent>
                </div>
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='積込情報' id='loading_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>積込日</p>
                  <Controller
                    name='loadingDate'
                    control={control}
                    render={({ field: { value, ...field }, fieldState }) => (
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込時間
                  </p>
                  <Controller
                    name='loadingTime'
                    control={control}
                    render={({ field, fieldState }) => (
                      <div className='flex flex-col'>
                        <AutocompleteComponent
                          items={animals}
                          className='w-[192px] pc:flex-1'
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
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    最終積込時間
                  </p>
                  <Controller
                    name='finalLoadingTime'
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
                    積込先名称
                  </p>
                  <Controller
                    name='loadingDestination'
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
                <div className='flex items-center gap-5 border-b border-color-border pb-3'>
                  <Controller
                    name='isAddress'
                    control={control}
                    render={({
                      field: { onChange, value, name, ...field },
                    }) => (
                      <CheckboxComponent
                        {...field}
                        checked={value || false}
                        onChange={onChange}
                        value={name}
                      >
                        住所を直接入力する場合こちらをチェックしてください
                      </CheckboxComponent>
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先(都道府県)
                  </p>
                  <Controller
                    name='destinationPrefecture'
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
                    積込先(市区町村)
                  </p>
                  <Controller
                    name='destinationCity'
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
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>住所</p>
                <Controller
                  name='loadingAddress'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-full' {...field} />
                  )}
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    お客様担当者
                  </p>
                  <Controller
                    name='loadingCustomerRepresentative'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    お客様連絡先
                  </p>
                  <Controller
                    name='loadingCustomerContact'
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
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>注意事項</p>
                <Controller
                  name='loadingNotes'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-full' {...field} />
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <TitleComponent content='荷卸情報' id='unloading_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>積込日</p>
                  <Controller
                    name='unloadingDate'
                    control={control}
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-col'>
                        <DatePickerComponent
                          selected={value}
                          className='h-12'
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
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込時間
                  </p>
                  <Controller
                    name='unloadingTime'
                    control={control}
                    render={({ field, fieldState }) => (
                      <div className='flex flex-col'>
                        <AutocompleteComponent
                          items={animals}
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
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    最終積込時間
                  </p>
                  <Controller
                    name='finalLoadingTime'
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
                    積込先名称
                  </p>
                  <Controller
                    name='unloadingDestination'
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
                <div className='flex items-center'>
                  <CheckboxComponent>
                    住所を直接入力する場合こちらをチェックしてください
                  </CheckboxComponent>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    積込先(都道府県)
                  </p>
                  <Controller
                    name='unDestinationPrefecture'
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
                    積込先(市区町村)
                  </p>
                  <AutocompleteComponent items={animals} className='w-auto' />
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>住所</p>
                <Controller
                  name='unloadingAddress'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-full' {...field} />
                  )}
                />
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    お客様担当者
                  </p>
                  <Controller
                    name='unloadingCustomerRepresentative'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    お客様連絡先
                  </p>
                  <Controller
                    name='unloadingCustomerContact'
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
                </div>
              </div>

              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>注意事項</p>
                <Controller
                  name='unloadingNotes'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-full' {...field} />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='配車情報' id='dispatch_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>依頼先</p>
                <Controller
                  name='requestedBy'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteComponent
                      isDisabled
                      items={animals}
                      className='col-span-3 w-full'
                      {...field}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='詳細情報' id='more_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>距離</p>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='distance'
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className='flex flex-1 flex-col'>
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
                        <div className='flex flex-1 flex-col'>
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
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>荷物名</p>
                  <Controller
                    name='baggage'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>荷姿</p>
                  <Controller
                    name='packaging'
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
                  <p className='font-bold leading-5 text-color-label'>重量</p>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='weight'
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className='flex flex-1 flex-col'>
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
                    <span className='font-bold leading-5'>kg</span>
                  </div>
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>数量</p>
                  <Controller
                    name='quantity'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>才数</p>
                  <Controller
                    name='talent'
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
                </div>
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='金額情報' id='amount_information' />
            <div className='mt-8 flex flex-col gap-3 pc:max-w-full'>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                基本料金
              </p>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                売上基本料金
              </p>
              <div className='flex items-center gap-5'>
                <div className='flex min-w-[150px] items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    運賃
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <Controller
                  name='chargeFare'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='min-w-[300px]' {...field} />
                  )}
                />
                <InputComponent className='w-[120px]' />
              </div>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                付帯料金
              </p>
              <div className='flex items-center gap-5'>
                <div className='flex min-w-[150px] items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    高速代
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <div className='flex flex-1 items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='expresswayFee'
                      control={control}
                      render={({ field }) => (
                        <InputComponent className='w-[300px]' {...field} />
                      )}
                    />
                    <InputComponent className='w-[120px]' />
                    <ButtonComponent
                      className='max-w-[118px]'
                      startContent={
                        <div className='text-primary'>
                          <Plus />
                        </div>
                      }
                    >
                      添付書類
                    </ButtonComponent>
                  </div>
                  <Button isIconOnly variant='light'>
                    <Bin />
                  </Button>
                </div>
              </div>
              <div className='flex gap-[35px]'>
                <ButtonComponent
                  className='ml-[-20px] border-none shadow-none'
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
                  className='border-none shadow-none'
                  variant='light'
                  startContent={
                    <div className='text-primary'>
                      <Plus />
                    </div>
                  }
                >
                  支払から登録
                </ButtonComponent>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>売上金額合計</p>
                <Controller
                  name='totalAmount'
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
                    name='billDate'
                    control={control}
                    render={({ field }) => (
                      <InputComponent className='max-w-[176.79px]' {...field} />
                    )}
                  />
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    請求締日
                  </p>
                  <Controller
                    name='billDeadline'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        placeholder='末日'
                        disabled
                        className='max-w-[176.79px]'
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              <p className='mt-[68px] border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                支払基本料金
              </p>
              <div className='flex items-center gap-5'>
                <div className='flex min-w-[150px] items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    運賃
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <Controller
                  name='paymentFare'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='min-w-[300px]' {...field} />
                  )}
                />
                <InputComponent className='w-[120px]' />
              </div>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                付帯料金
              </p>
              <div className='flex items-center gap-5'>
                <div className='flex min-w-[150px] items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    高速代
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <div className='flex flex-1 items-center justify-between'>
                  <div className='flex items-center gap-5'>
                    <Controller
                      name='expresswayFee'
                      control={control}
                      render={({ field }) => (
                        <InputComponent className='w-[300px]' {...field} />
                      )}
                    />
                    <InputComponent className='w-[120px]' />
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>支払金額合計</p>
                <Controller
                  name='unloadingDestination'
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
            </div>
          </div>

          <div className='mt-7 flex justify-center gap-6'>
            <ButtonComponent className='h-[54px] w-56'>
              キャンセル
            </ButtonComponent>
            <ButtonComponent
              className='h-[54px] w-56 bg-primary text-white'
              type='submit'
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
                onClick={() => handleSubmit(onSubmit)}
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

export default EditOrderLogistic;

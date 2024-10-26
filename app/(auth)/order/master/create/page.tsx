'use client';

import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import StickyAction from '@/app/components/order/StickyAction';
import { RadioComponent } from '@/app/components/common/element/RadioComponent';
import { ArrowDown, Bin, Plus } from '@/app/components/svg';
import TitleComponent from '@/app/components/common/TitleComponent';
import { linkHref } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { schemaOrderMaster } from '@/app/utils/schemas/order';
import { Button, CheckboxGroup, RadioGroup } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next-nprogress-bar';

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

type IOrderMaster = z.infer<typeof schemaOrderMaster>;

/**
 *
 * @page ORD0202
 */

const CreateOrderMaster = (props: Props) => {
  const router = useRouter();
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/order/master',
        text: '受注マスタ',
      },
      {
        href: '/order/master/create',
        text: '登録',
      },
    ]);
  }, [saveBreadcrumbs]);
  const animals = [
    {
      label: '希望なし',
      value: '希望なし',
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

  const { control, handleSubmit, watch, getValues, setValue } =
    useForm<IOrderMaster>({
      resolver: zodResolver(schemaOrderMaster),
      mode: 'all',
      defaultValues: {
        loadingDesiredDate: '曜日指定',
        unloadingDesiredDate: '翌日',
      },
    });

  useEffect(() => {
    if (watch('loadingIsAddress')) {
      setValue('loadingDestinationName', '');
    }
  }, [watch('loadingIsAddress')]);

  useEffect(() => {
    if (watch('unloadingIsAddress')) {
      setValue('unloadingDestinationName', '');
    }
  }, [watch('unloadingIsAddress')]);

  useEffect(() => {
    if (watch('loadingDesiredDate') === '土日・祝日') {
      const filter = getValues('loadingDayOfWeek')?.filter(
        (item) => item === '土' || item === '日' || item === '祝日'
      );
      setValue('loadingDayOfWeek', filter);
    } else if (watch('loadingDesiredDate') === '平日') {
      const filter = getValues('loadingDayOfWeek')?.filter(
        (item) =>
          item === '月' ||
          item === '火' ||
          item === '水' ||
          item === '木' ||
          item === '金'
      );
      setValue('loadingDayOfWeek', filter);
    } else if (watch('loadingDesiredDate') === '曜日指定') {
      const filter = getValues('loadingDayOfWeek')?.filter(
        (item) => item !== '祝日'
      );
      setValue('loadingDayOfWeek', filter);
    }
  }, [watch('loadingDesiredDate')]);

  const onSubmit: SubmitHandler<IOrderMaster> = (data) => {
    console.log({ data });
    router.push('/order/master/create-successfully');
  };

  return (
    <div className='p-10 pb-16 pt-7'>
      <p className='text-2xl font-bold leading-[30px]'>受注マスタ登録</p>
      <div className='mt-[30px] flex gap-9'>
        <form className='flex flex-1 flex-col gap-10'>
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
                    得意先名
                  </p>
                  <Controller
                    name='regularCustomer'
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
                    受注支店
                  </p>
                  <Controller
                    name='orderBranch'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        className='w-auto'
                        items={animals}
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
                        className='w-auto'
                        items={animals}
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
                    name='billingBranch'
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
                  <Controller
                    name='desiredVehicleClassOption'
                    control={control}
                    render={({ field }) => (
                      <AutocompleteComponent
                        items={animals}
                        className='w-auto'
                        {...field}
                      />
                    )}
                  />
                  <Controller
                    name='desiredVehicleCategory'
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
                    要望台数
                  </p>
                  <Controller
                    name='numberOfUnitRequested'
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
                <p className='font-bold leading-5 text-color-label'>備考</p>
                <Controller
                  name='remarks'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-full' {...field} />
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
                    積込先名称
                  </p>
                  <Controller
                    name='loadingDestinationName'
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
                <div className='flex items-center border-b border-color-border pb-3'>
                  <Controller
                    name='loadingIsAddress'
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
                    name='loadingDestinationPrefecture'
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
                    name='loadingDestinationCity'
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
                    <InputComponent className='col-span-3 w-auto' {...field} />
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
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  開始日/終了日
                </p>
                <div className='col-span-3 flex items-center'>
                  <Controller
                    control={control}
                    name='startDate'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-12 w-auto flex-1 text-sm'
                          selected={value}
                          selectsStart
                          startDate={watch('startDate')}
                          endDate={watch('endDate')}
                          maxDate={watch('endDate')}
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
                  <span className='mx-4'>～</span>
                  <Controller
                    control={control}
                    name='endDate'
                    render={({ field: { value, ...field }, fieldState }) => (
                      <div className='flex flex-1 flex-col'>
                        <DatePickerComponent
                          className='h-12 w-auto flex-1 text-sm'
                          selected={value}
                          selectsEnd
                          startDate={watch('startDate')}
                          endDate={watch('endDate')}
                          minDate={watch('startDate')}
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
                  積込希望日
                </p>
                <Controller
                  control={control}
                  name='loadingDesiredDate'
                  render={({ field: { value, onChange, ...field } }) => (
                    <RadioGroup
                      orientation='horizontal'
                      defaultValue={'曜日指定'}
                      value={value}
                      onValueChange={onChange}
                      {...field}
                      classNames={{ wrapper: 'gap-4', base: 'col-span-3' }}
                    >
                      <RadioComponent value={'平日'}>平日</RadioComponent>
                      <RadioComponent
                        classNames={{
                          label: 'w-full',
                          base: 'max-w-[200px]',
                        }}
                        value={'土日・祝日'}
                      >
                        土日・祝日
                      </RadioComponent>
                      <RadioComponent value={'毎日'}>毎日</RadioComponent>
                      <RadioComponent
                        classNames={{ label: 'w-[64px]' }}
                        value={'曜日指定'}
                      >
                        曜日指定
                      </RadioComponent>
                    </RadioGroup>
                  )}
                />
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>曜日指定</p>
                <div className='col-span-3 flex items-center gap-4'>
                  <Controller
                    control={control}
                    name='loadingDayOfWeek'
                    render={({ field: { value, onChange, ...field } }) => (
                      <CheckboxGroup
                        value={value}
                        onValueChange={onChange}
                        orientation='horizontal'
                        classNames={{ wrapper: 'gap-4' }}
                        {...field}
                      >
                        <CheckboxComponent
                          value='月'
                          isDisabled={
                            watch('loadingDesiredDate') === '土日・祝日'
                          }
                        >
                          月
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='火'
                          isDisabled={
                            watch('loadingDesiredDate') === '土日・祝日'
                          }
                        >
                          火
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='水'
                          isDisabled={
                            watch('loadingDesiredDate') === '土日・祝日'
                          }
                        >
                          水
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='木'
                          isDisabled={
                            watch('loadingDesiredDate') === '土日・祝日'
                          }
                        >
                          木
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='金'
                          isDisabled={
                            watch('loadingDesiredDate') === '土日・祝日'
                          }
                        >
                          金
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='土'
                          isDisabled={watch('loadingDesiredDate') === '平日'}
                        >
                          土
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='日'
                          isDisabled={watch('loadingDesiredDate') === '平日'}
                        >
                          日
                        </CheckboxComponent>
                        <CheckboxComponent
                          value='祝日'
                          isDisabled={
                            watch('loadingDesiredDate') === '曜日指定' ||
                            watch('loadingDesiredDate') === '平日'
                          }
                        >
                          祝日
                        </CheckboxComponent>
                      </CheckboxGroup>
                    )}
                  />
                </div>
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  希望時間帯
                </p>
                <Controller
                  name='loadingPreferredTimeSlot'
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
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>
                    荷卸先名称
                  </p>
                  <Controller
                    name='unloadingDestinationName'
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
                <div className='flex items-center border-b border-color-border pb-3'>
                  <Controller
                    name='unloadingIsAddress'
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
                    荷卸先(都道府県)
                  </p>
                  <Controller
                    name='unloadingDestinationPrefecture'
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
                    荷卸先(市区町村)
                  </p>
                  <Controller
                    name='unloadingDestinationCity'
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
                  name='unloadingAddress'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-auto' {...field} />
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
                    render={({ field }) => (
                      <InputComponent className='w-auto' {...field} />
                    )}
                  />
                </div>
              </div>
              <div className='grid min-h-[61px] grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  荷卸希望日
                </p>
                <Controller
                  control={control}
                  name='unloadingDesiredDate'
                  render={({ field: { value, onChange, ...field } }) => (
                    <RadioGroup
                      orientation='horizontal'
                      defaultValue={'当日'}
                      value={value}
                      onValueChange={onChange}
                      {...field}
                      classNames={{ wrapper: 'gap-4', base: 'col-span-3' }}
                    >
                      <RadioComponent value={'当日'}>当日</RadioComponent>
                      <RadioComponent value={'翌日'}>翌日</RadioComponent>
                      <RadioComponent value={'中一日'}>中一日</RadioComponent>
                    </RadioGroup>
                  )}
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>
                  希望時間帯
                </p>
                <Controller
                  name='unloadingPreferredTimeSlot'
                  control={control}
                  render={({ field }) => (
                    <AutocompleteComponent
                      defaultSelectedKey={'希望なし'}
                      items={animals}
                      className='col-span-3 w-auto'
                      {...field}
                    />
                  )}
                />
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
            <div className='mt-8 flex flex-col gap-3'>
              <div className='grid grid-cols-4 items-center gap-5 border-b border-color-border pb-3'>
                <p className='font-bold leading-5 text-color-label'>依頼先</p>
                <Controller
                  name='requestedBy'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-3 w-auto' {...field} />
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
                    name='baggageName'
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
                </div>
                <div className='grid grid-cols-2 items-center gap-5 border-b border-color-border pb-3'>
                  <p className='font-bold leading-5 text-color-label'>数量</p>
                  <Controller
                    name='quantity'
                    control={control}
                    render={({ field }) => (
                      <InputComponent
                        type='number'
                        className='w-auto'
                        {...field}
                      />
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
                      <div className='flex flex-1 flex-col'>
                        <InputComponent
                          type='number'
                          className='col-span-3 w-auto'
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
                <div className='w-auto'></div>
              </div>
            </div>
          </div>

          <div>
            <TitleComponent content='金額情報' id='amount_information' />
            <div className='mt-8 flex flex-col gap-3'>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                売上基本料金
              </p>
              <div className='flex items-center gap-5'>
                <p className='min-w-[150px] font-bold leading-5 text-color-label'>
                  運賃
                </p>
                <Controller
                  name='fareExplanation'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-2 w-auto' {...field} />
                  )}
                />
                <Controller
                  name='freightUnitPrice'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-2 w-auto' {...field} />
                  )}
                />
              </div>
              <Controller
                name='isBasicSaleFee'
                control={control}
                render={({ field: { onChange, value, name, ...field } }) => (
                  <CheckboxComponent
                    {...field}
                    checked={value || false}
                    onChange={onChange}
                    value={name}
                  >
                    仮金額の場合はチェックしてください
                  </CheckboxComponent>
                )}
              />
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                付帯料金
              </p>
              <div className='grid grid-cols-5 items-center gap-5'>
                <div className='col-span-1 flex items-center gap-3'>
                  <span className='font-bold leading-5 text-color-label'>
                    高速代
                  </span>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
                <Controller
                  name='additionalChargesCategory'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-2 w-auto' {...field} />
                  )}
                />
                <Controller
                  name='additionalChargesExplanation'
                  control={control}
                  render={({ field }) => (
                    <InputComponent className='col-span-1 w-auto' {...field} />
                  )}
                />
                <div className='col-span-1 flex shrink justify-between'>
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
                  <Button isIconOnly variant='light'>
                    <Bin />
                  </Button>
                </div>
              </div>
              <Controller
                name='isBasicSaleFeeAdditionalFee'
                control={control}
                render={({ field: { onChange, value, name, ...field } }) => (
                  <CheckboxComponent
                    {...field}
                    checked={value || false}
                    onChange={onChange}
                    value={name}
                  >
                    仮金額の場合はチェックしてください
                  </CheckboxComponent>
                )}
              />
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
              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>売上金額合計</p>

                <InputComponent disabled className='max-w-[193px]' />
              </div>
              <p className='mt-5 border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                支払基本料金
              </p>
              <div className='flex items-center gap-5'>
                <p className='min-w-[150px] font-bold leading-5 text-color-label'>
                  運賃
                </p>
                <InputComponent className='min-w-[300px]' />
                <InputComponent className='w-[120px]' />
              </div>
              <CheckboxComponent>
                仮金額の場合はチェックしてください
              </CheckboxComponent>
              <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
                付帯料金
              </p>
              <div className='flex items-center gap-[13px]'>
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
              </div>

              <div className='flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>支払金額合計</p>
                <InputComponent disabled className='max-w-[193px]' />
              </div>
            </div>
          </div>

          <div className='mt-7 flex justify-center gap-6'>
            <ButtonComponent className='h-[54px] w-56'>
              キャンセル
            </ButtonComponent>
            <ButtonComponent
              className='h-[54px] w-56 bg-primary text-white'
              onClick={handleSubmit(onSubmit)}
            >
              内容確認
            </ButtonComponent>
          </div>
        </form>
        <div className='relative min-w-[225px]'>
          <div className='fixed'>
            <StickyAction labelSticky={labelSticky} LinkHref={linkHref} />
            <div className='flex flex-col gap-2'>
              <ButtonComponent className='h-[54px] w-full bg-primary text-base text-white'>
                内容確認
              </ButtonComponent>
              <ButtonComponent
                variant='flat'
                className='h-[54px] w-full border border-primary text-base'
              >
                一時保存
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

export default CreateOrderMaster;

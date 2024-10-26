'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import { RadioComponent } from '@/app/components/common/element/RadioComponent';
import { RadioGroup, useDisclosure } from '@nextui-org/react';
import React from 'react';
import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import { ArrowDown } from '@/app/components/svg';
import DropdownSearch from '@/app/components/DropdownSearch';
import PopupCreateInfoCar from '@/app/components/common/modal/PopupCreateInfoCar';
import InputInfoPayment from '@/app/components/common/modal/InputInfoPayment';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import { toast } from 'react-toastify';
import TableOrderListLogistic from '@/app/components/order/TableOrderListLogistic';
import Toast from '@/app/components/common/Toast';
import SplitOrder from '@/app/components/common/modal/SplitOrder';
import ModalComponent from '@/app/components/common/ModalComponent';
import AdditionalFeeRejection from '@/app/components/common/modal/AdditionalFeeRejection';
import UploadAttachFile from '@/app/components/common/modal/UploadAttachFile';

const Setting = () => {
  const items = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
  ];
  const branchInCharge = [
    { label: 'hung', value: 'hung' },
    { label: 'duc', value: 'duc' },
    { label: 'dat', value: 'dat' },
    { label: 'Minh', value: 'Minh' },
    { label: 'Dang', value: 'Dang' },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isBulkEdit,
    onOpen: onBulkEdit,
    onOpenChange: onBulkEditChange,
    onClose: onCloseBulkEdit,
  } = useDisclosure();

  const handleCreateCourse = (title: string) => {
    toast(<Toast title={title} />, {
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: -15,
      },
      toastId: title,
    });
  };
  const className = 'flex w-fit gap-5 border border-color-2rd-border p-4';
  return (
    <div className='flex flex-col gap-6 p-8'>
      <div className='flex flex-col gap-5 border p-5'>
        Table
        <TableOrderListLogistic />
      </div>

      <ModalComponent
        className='max-w-[680px] pt-[35px]'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <div className='flex flex-col'>
          <p className='text-center text-2xl font-bold leading-[30px]'>
            受注をキャンセルします
            <br />
            キャンセル処理を選択してください
          </p>
          <div className='mt-20 flex flex-col gap-5 pl-[75px]'>
            <div className='flex gap-[56px]'>
              <span className='font-bold leading-[23.17px] text-color-label'>
                キャンセル区分
              </span>
              <RadioGroup orientation='horizontal' defaultValue={'有償'}>
                <RadioComponent value='無償'>無償</RadioComponent>
                <RadioComponent value='有償'>有償</RadioComponent>
              </RadioGroup>
            </div>
            <div className='mt-[6px] flex items-center gap-[56px]'>
              <span className='font-bold leading-[23.17px] text-color-label'>
                キャンセル理由
              </span>
              <InputComponent className='w-[300px]' />
            </div>
            <div className='flex items-center gap-[56px]'>
              <span className='min-w-[112px] font-bold leading-[23.17px] text-color-label'>
                金額
              </span>
              <InputComponent className='w-[120px]' />
            </div>
          </div>
          <p className='mt-[43px] flex justify-center leading-[21px] text-color-error'>
            キャンセルすると元に戻せません
          </p>
          <div className='mt-5 flex justify-center gap-5'>
            <ButtonComponent className='w-40'>戻る</ButtonComponent>
            <div className='h-9 w-[1px] bg-color-border'></div>
            <ButtonComponent className='w-40 text-white' variant='solid'>
              確定
            </ButtonComponent>
          </div>
        </div>
      </ModalComponent>
      <div className={className}>
        ORD0104受注分割ポップアップ
        <SplitOrder items={branchInCharge} />
      </div>

      <div className={className}>
        ORD0103一括変更ポップアップ
        <ButtonComponent
          className='w-fit bg-primary text-white'
          onPress={onBulkEdit}
        >
          Bulk Edit
        </ButtonComponent>
        <ModalComponent
          isOpen={isBulkEdit}
          onOpenChange={onBulkEditChange}
          className='max-w-[880px] px-10 py-6'
        >
          <div className='mb-[100px] flex flex-col gap-6'>
            <p className='text-2xl font-bold leading-[30px]'>一括変更</p>
            <p className='text-sm leading-[21px]'>
              選択したデータの担当支店、積込日、荷卸日をまとめて変更します
            </p>

            <div className='flex items-center border-b border-color-2rd-border pb-6'>
              <p className='w-[235px] font-bold text-color-label'>分割数</p>
              <DropdownSearch
                classNameBtn='flex-1 h-12'
                items={branchInCharge}
                classContent='w-full'
              />
            </div>
            <div className='flex items-center border-b border-color-2rd-border pb-6'>
              <p className='w-[235px] font-bold text-color-label'>分割数</p>
              <DatePickerComponent className='h-12 w-[192px] text-sm' />
            </div>
            <div className='flex items-center border-b border-color-2rd-border pb-6'>
              <p className='w-[235px] font-bold text-color-label'>分割数</p>
              <DatePickerComponent className='h-12 w-[192px] text-sm' />
            </div>
          </div>
          <div className='-mx-10'>
            <hr />
          </div>
          <div className='mt-3 flex justify-between'>
            <div
              className='flex cursor-pointer items-center gap-3'
              onClick={onCloseBulkEdit}
            >
              <div className='rotate-90 text-[#C2C2C2]'>
                <ArrowDown />
              </div>
              <p className='font-bold leading-5'>キャンセル</p>
            </div>
            <ButtonComponent
              className='h-8 w-[120px] text-white'
              variant='solid'
            >
              確定
            </ButtonComponent>
          </div>
        </ModalComponent>
      </div>

      <div className={className}>
        SRV0105配車情報登録ポップアップ
        <PopupCreateInfoCar items={branchInCharge} />
      </div>
      <div className={className}>
        SRV0106支払入力ポップアップ
        <InputInfoPayment items={branchInCharge} />
      </div>

      <div className={className}>
        SRV0111支払入力ポップアップ
        <AdditionalFeeRejection />
      </div>
      <div className={className}>
        SRV0112
        <UploadAttachFile />
      </div>

      <div className={className}>
        Message
        <ButtonComponent
          className='w-fit'
          onClick={() => handleCreateCourse('グループからコース作成')}
        >
          TOAST
        </ButtonComponent>
      </div>

      <div className={className}>
        Pagination
        <PaginationComponent />
      </div>

      <div className={className}>
        Checkbox
        <CheckboxComponent>荷卸日</CheckboxComponent>
      </div>

      <div className={className}>
        Radio
        <RadioGroup orientation='horizontal' defaultValue={'有償'}>
          <RadioComponent value='無償'>無償</RadioComponent>
          <RadioComponent value='有償'>有償</RadioComponent>
          <RadioComponent value='卸日'>卸日</RadioComponent>
        </RadioGroup>
      </div>
      <div className={className}>
        Autocomplete
        <AutocompleteComponent items={branchInCharge} />
      </div>

      <div className={className}>
        Input
        <InputComponent />
      </div>
      <div className={className}>
        Button
        <ButtonComponent className='w-fit bg-primary text-white'>
          Button
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Setting;

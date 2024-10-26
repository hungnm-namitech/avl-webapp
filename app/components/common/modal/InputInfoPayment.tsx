import { Button, useDisclosure } from '@nextui-org/react';
import React from 'react';
import ButtonComponent from '../element/ButtonComponent';
import InputComponent from '../element/InputComponent';
import { ArrowDown, Bin, Plus } from '../../svg';
import AutocompleteComponent from '../element/AutocompleteComponent';
import ModalComponent from '../ModalComponent';

type Props = {
  items: { label: string; value: string }[];
};

const InputInfoPayment = ({ items }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <div>
      <ButtonComponent className='w-fit bg-primary text-white' onPress={onOpen}>
        Input Payments information
      </ButtonComponent>
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className='max-w-[1200px] px-10 py-6'
      >
        <div className='mb-1 flex flex-col gap-5'>
          <p className='text-2xl font-bold leading-[30px]'>支払入力</p>
          <p className='text-sm leading-[21px]'>支払の入力をしてください</p>
          <div>
            <div className='flex items-center justify-between border-b border-color-border pb-[18px]'>
              <p className='text-xl font-bold leading-[25px]'>基本料金</p>
              <p className='flex gap-2 text-sm font-normal'>
                目標値（8%）を基準とした算出料金：　¥11,134
              </p>
            </div>
            <div className='mt-4 flex items-center gap-4'>
              <p className='w-[150px] font-bold text-color-label'>運賃</p>
              <InputComponent className='w-[300px]' />
              <InputComponent
                type='number'
                className='w-[120px]'
                startContent={<span className='select-none'>¥</span>}
              />
            </div>
          </div>
          <div>
            <p className='border-b border-color-border pb-[18px] text-xl font-bold leading-[25px]'>
              その他の料金
            </p>
            <div className='mt-2 flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <p className='flex w-[150px] items-center gap-2 font-bold text-color-label'>
                  高速代{' '}
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </p>
                <InputComponent className='w-[300px]' />
                <InputComponent
                  type='number'
                  className='w-[120px]'
                  startContent={<span className='pointer-events-none'>¥</span>}
                />
                <div className='flex w-[150px] flex-col'>
                  <span>協力会社入力:</span>
                  <span>¥2,200</span>
                </div>
                <div className='flex-1 text-xs text-primary'>
                  高速代_20240510.png
                </div>
                <Button isIconOnly variant='light'>
                  <Bin />
                </Button>
              </div>
              <div className='flex items-center gap-4'>
                <p className='flex w-[150px] items-center gap-2 font-bold text-color-label'>
                  待機料{' '}
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </p>
                <InputComponent className='w-[300px]' />
                <InputComponent
                  type='number'
                  className='w-[120px]'
                  startContent={<span className='pointer-events-none'>¥</span>}
                />
                <div className='flex w-[150px] flex-col'>
                  <span>協力会社入力:</span>
                  <span>¥2,200</span>
                </div>
                <div className='flex-1'>
                  <ButtonComponent
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
              <div className='flex items-center gap-4'>
                <p className='flex w-[150px] items-center gap-2 font-bold text-color-label'>
                  廃棄料{' '}
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </p>
                <InputComponent className='w-[300px]' />
                <InputComponent
                  type='number'
                  className='w-[120px]'
                  startContent={<span className='pointer-events-none'>¥</span>}
                />
                <div className='flex w-[150px] flex-col'>
                  <span>協力会社入力:</span>
                  <span>¥{'2,200'}</span>
                </div>
                <div className='flex-1'>
                  <ButtonComponent
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
              <div className='ml-[-20px]'>
                <ButtonComponent
                  startContent={
                    <div className='text-primary'>
                      <Plus />
                    </div>
                  }
                  variant='light'
                  className='border-none text-base shadow-none'
                >
                  内訳を追加
                </ButtonComponent>
              </div>
            </div>
            <div>
              <div className='mt-1 flex items-center justify-between'>
                <p className='text-xl font-bold leading-[25px]'>支払金額合計</p>
                <InputComponent className='w-[278px]' disabled />
              </div>
              <div className='mt-2 flex gap-[15px]'>
                <div className='flex w-1/2 items-center justify-between'>
                  <p className='font-bold text-color-label'>支払基準日</p>
                  <AutocompleteComponent items={items} className='w-[197px]' />
                </div>
                <div className='flex w-1/2 items-center justify-between'>
                  <p className='font-bold text-color-label'>支払締日</p>
                  <AutocompleteComponent items={items} className='w-[197px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='-mx-10 my-3'>
          <hr />
        </div>
        <div className='flex justify-between'>
          <div
            className='flex cursor-pointer items-center gap-3'
            onClick={onClose}
          >
            <div className='rotate-90 text-[#C2C2C2]'>
              <ArrowDown />
            </div>
            <p className='font-bold leading-5'>キャンセル</p>
          </div>
          <ButtonComponent className='mr-14 h-8 text-white' variant='solid'>
            確定
          </ButtonComponent>
        </div>
      </ModalComponent>
    </div>
  );
};

export default InputInfoPayment;

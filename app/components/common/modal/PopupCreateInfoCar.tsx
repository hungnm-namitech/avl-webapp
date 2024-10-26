import { cn, useDisclosure } from '@nextui-org/react';
import React from 'react';
import ButtonComponent from '../element/ButtonComponent';
import AutocompleteComponent from '../element/AutocompleteComponent';
import InputComponent from '../element/InputComponent';
import { ArrowDown } from '../../svg';
import ModalComponent from '../ModalComponent';

type Props = {
  items: { label: string; value: string }[];
};

const PopupCreateInfoCar = ({ items }: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  let sscv;
  if (typeof window !== 'undefined') {
    sscv = window.localStorage.getItem('sscv');
  }
  return (
    <div>
      <ButtonComponent className='w-fit' onPress={onOpen}>
        Create Cars information
      </ButtonComponent>
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className='max-h-[95%] max-w-[880px] px-10 py-6'
      >
        <div className={cn('flex flex-col gap-5', sscv && 'mb-[100px]')}>
          <p className='text-2xl font-bold leading-[30px]'>配車情報の登録</p>

          <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
            <p className='w-[200px] font-bold text-color-label'>依頼先</p>
            <AutocompleteComponent
              className='flex-1'
              items={items}
              inputProps={{
                classNames: {
                  innerWrapper: 'h-[55px]',
                },
              }}
            />
          </div>
          <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
            <p className='w-[200px] font-bold text-color-label'>実走会社</p>
            <InputComponent
              className='flex-1'
              classNames={{ innerWrapper: 'h-[55px]' }}
            />
          </div>
          <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
            <p className='w-[200px] font-bold text-color-label'>車格</p>
            <div className='flex gap-5'>
              <AutocompleteComponent
                className='w-[140px]'
                items={items}
                inputProps={{
                  classNames: {
                    innerWrapper: 'h-[55px]',
                  },
                }}
              />
              <AutocompleteComponent
                className='w-[200px]'
                items={items}
                inputProps={{
                  classNames: {
                    innerWrapper: 'h-[55px]',
                  },
                }}
              />
            </div>
          </div>
          <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
            <p className='w-[200px] font-bold text-color-label'>車番</p>
            <InputComponent
              className='flex-1'
              classNames={{ innerWrapper: 'h-[55px]' }}
            />
          </div>
          {!sscv && (
            <>
              <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
                <p className='w-[200px] font-bold text-color-label'>
                  ドライバー
                </p>
                <InputComponent
                  className='flex-1'
                  classNames={{ innerWrapper: 'h-[55px]' }}
                />
              </div>
              <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
                <p className='w-[200px] font-bold text-color-label'>
                  ドライバー連絡先
                </p>
                <InputComponent
                  className='flex-1'
                  classNames={{ innerWrapper: 'h-[55px]' }}
                />
              </div>
              <div className='flex items-center gap-5 border-b border-color-2rd-border pb-5'>
                <p className='w-[200px] font-bold text-color-label'>同乗者名</p>
                <InputComponent
                  className='flex-1'
                  classNames={{ innerWrapper: 'h-[55px]' }}
                />
              </div>
            </>
          )}
          <div className='flex items-center gap-5'>
            <p className='w-[200px] font-bold text-color-label'>下請け業者数</p>
            <InputComponent
              className='w-[140px]'
              classNames={{ innerWrapper: 'h-[55px]' }}
            />
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
          <ButtonComponent className='h-8 w-[138px] text-white' variant='solid'>
            配車情報の登録
          </ButtonComponent>
        </div>
      </ModalComponent>
    </div>
  );
};

export default PopupCreateInfoCar;

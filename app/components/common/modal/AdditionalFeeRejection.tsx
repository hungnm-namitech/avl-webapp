import React from 'react';
import ModalComponent from '../ModalComponent';
import { Textarea, useDisclosure } from '@nextui-org/react';
import ButtonComponent from '../element/ButtonComponent';

const AdditionalFeeRejection = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <ButtonComponent className='w-fit bg-primary text-white' onPress={onOpen}>
        AdditionalFeeRejection
      </ButtonComponent>
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className='flex min-h-[400px] min-w-[680px] items-center justify-center pt-[59px]'
      >
        <div className='text-center text-2xl font-bold leading-[30px]'>
          <p>付帯料金の申請を却下します</p>
          <p>理由がある場合は入力してください</p>
        </div>
        <Textarea
          variant='bordered'
          radius='sm'
          classNames={{
            inputWrapper:
              'border border-color-border rounded w-[480px] min-h-24 my-8',
          }}
        />
        <div className='mt-2 flex justify-center gap-5'>
          <ButtonComponent className='w-40'>戻る</ButtonComponent>
          <div className='h-9 w-[1px] bg-color-border'></div>
          <ButtonComponent className='w-40 text-white' variant='solid'>
            確定
          </ButtonComponent>
        </div>
      </ModalComponent>
    </>
  );
};

export default AdditionalFeeRejection;

import React, { Key, useMemo, useState } from 'react';
import InputComponent from '../common/element/InputComponent';
import DatePickerComponent from '../common/element/DatePickerComponent';
import DetailRow from '@/app/components/common/DetailRow';
import { BASIC_INFO, divisions } from '@/app/constants/order.const';
import DropdownComponent from '@/app/components/common/element/DropdownConponent';
import TitleComponent from '@/app/components/common/TitleComponent';
import { Controller, SubmitHandler, useFieldArray } from 'react-hook-form';
import { ArrowDown } from '@/app/components/svg';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import ModalComponent from '@/app/components/common/ModalComponent';
import { Selection } from '@nextui-org/react';
import { useZodForm } from '@/app/hook/useZodForm';
import { IFormSplitOrder, schemaSplitOrder } from '@/app/utils/schemas/order';

type Props = { isOpen: boolean; onOpenChange: () => void; onClose: () => void };

const LogisticSplitOrder = ({ isOpen, onOpenChange, onClose }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']));
  const selectedValue = useMemo(() => {
    return Array.from(selectedKeys).join(', ').replaceAll('_', ' ');
  }, [selectedKeys]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useZodForm({
    schema: schemaSplitOrder,
    defaultValues: {
      splitOrder: [{}],
    },
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'splitOrder',
  });

  const handleDivision = (key: Key) => {
    if (Number(key) > Number(selectedValue)) {
      append(
        Array.from({ length: Number(key) - Number(selectedValue) }, () => ({
          expressFee: '',
          fare: '',
          loadingDate: new Date(),
          nameLoadingDestination: '',
          nameUnloadingDestination: '',
          unloadingDate: new Date(),
        }))
      );
    } else if (Number(key) < Number(selectedValue)) {
      const unselectedValue = Array.from(
        { length: Number(selectedValue) - Number(key) },
        (_, index) => index + Number(key)
      );
      console.log({ unselectedValue });
      remove(unselectedValue);
    }
  };
  const onSubmit: SubmitHandler<{ splitOrder: Array<IFormSplitOrder> }> = (
    data
  ) => {
    console.log({ data });
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className='max-h-[95%] max-w-[1040px] px-12 py-6'
    >
      <div className='mb-3 flex flex-col gap-6'>
        <p className='text-2xl font-bold leading-[30px]'>受注分割</p>
        <div>
          <DetailRow
            items={[
              { content: '23/08/13 (日)', label: BASIC_INFO.DATE },
              {
                label: BASIC_INFO.UNLOAD_DATE,
                content: '23/08/13 (日)',
              },
            ]}
          />
          <DetailRow
            items={[
              { content: '東大阪', label: '積込先名称' },
              {
                label: '荷卸先名称',
                content: '御幣島',
              },
            ]}
          />
          <DetailRow
            items={[
              { content: '120,000円', label: '運賃' },
              {
                label: '高速代',
                content: '15,000円',
              },
            ]}
          />
        </div>

        <div className='flex items-center'>
          <p className='w-[235px] font-bold leading-5 text-color-label'>
            分割数
          </p>
          <DropdownComponent
            items={divisions}
            className='h-12 w-[220px]'
            value={selectedKeys}
            onChange={setSelectedKeys}
            handleAction={(key) => handleDivision(key)}
          />
        </div>
      </div>
      <hr />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-[18px] flex flex-col'
      >
        {fields.map((field, index) => {
          const errorForField = errors?.splitOrder?.[index];
          return (
            <div key={field.id}>
              <TitleComponent content={`分割${index + 1}`} />
              <div className='mt-6 flex flex-col gap-3'>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='grid grid-cols-2 items-center gap-5 border-b border-color-2rd-border pb-3'>
                    <p className='font-bold leading-5 text-color-label'>
                      積込日
                    </p>
                    <Controller
                      control={control}
                      name={`splitOrder.${index}.loadingDate`}
                      render={({ field: { value, ...field } }) => (
                        <div className='flex flex-col'>
                          <DatePickerComponent
                            className='h-12 text-sm'
                            selected={value}
                            {...field}
                          />
                          {errorForField?.loadingDate && (
                            <p className='mt-2 text-xs text-color-error'>
                              {errorForField?.loadingDate?.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                  <div className='grid grid-cols-2 items-center gap-5 border-b border-color-2rd-border pb-3'>
                    <p className='font-bold leading-5 text-color-label'>
                      荷卸日
                    </p>
                    <Controller
                      control={control}
                      name={`splitOrder.${index}.unloadingDate`}
                      render={({ field: { value, ...field } }) => (
                        <div className='flex flex-col'>
                          <DatePickerComponent
                            className='h-12 text-sm'
                            selected={value}
                            {...field}
                          />
                          {errorForField?.unloadingDate && (
                            <p className='mt-2 text-xs text-color-error'>
                              {errorForField?.unloadingDate?.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='grid grid-cols-2 items-center gap-5 border-b border-color-2rd-border pb-3'>
                    <p className='font-bold leading-5 text-color-label'>運賃</p>
                    <Controller
                      name={`splitOrder.${index}.fare`}
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
                  <div className='grid grid-cols-2 items-center gap-5 border-b border-color-2rd-border pb-3'>
                    <p className='font-bold leading-5 text-color-label'>
                      高速代
                    </p>
                    <Controller
                      name={`splitOrder.${index}.expressFee`}
                      control={control}
                      render={({ field, fieldState }) => (
                        <div className='flex flex-col'>
                          <InputComponent
                            type='number'
                            className='w-auto'
                            {...field}
                          />
                          {errorForField?.expressFee && (
                            <p className='mt-2 text-xs text-color-error'>
                              {errorForField?.expressFee?.message}
                            </p>
                          )}
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <hr className='mt-12' />
        <div className='mt-3 flex justify-between'>
          <div
            className='flex cursor-pointer items-center gap-3 pl-6'
            onClick={onClose}
          >
            <div className='rotate-90 text-[#C2C2C2]'>
              <ArrowDown />
            </div>
            <p className='font-bold leading-5'>キャンセル</p>
          </div>
          <ButtonComponent
            className='h-8 w-[120px] text-white'
            variant='solid'
            type='submit'
          >
            確定
          </ButtonComponent>
        </div>
      </form>
    </ModalComponent>
  );
};

export default LogisticSplitOrder;

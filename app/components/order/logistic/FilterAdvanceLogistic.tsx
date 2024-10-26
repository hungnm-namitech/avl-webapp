'use client';

import { cn, Input, Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react';
import SearchIcon from '../../svg/common/Search';
import { IoIosArrowDown } from 'react-icons/io';
import DatePickerComponent from '../../common/element/DatePickerComponent';
import ButtonComponent from '../../common/element/ButtonComponent';
import { FiSearch } from 'react-icons/fi';
import DropDownShowColumn from '../DropDownShowColumn';

type FilterAdvanceLogisticProps = {
  columns: { id: string; label: string; show: boolean; sort: string }[];
  updateColumns: (
    columns: { id: string; label: string; show: boolean; sort: string }[]
  ) => void;
};

export default function FilterAdvanceLogistic(
  props: FilterAdvanceLogisticProps
) {
  const { columns, updateColumns } = props;

  const [isShowSearch, setIsShowSearch] = useState(false);

  const toggleContent = () => {
    setIsShowSearch(!isShowSearch);
  };
  return (
    <div className='px-5 py-[35px]'>
      <div
        className={cn(
          'rounded border border-color-2rd-border bg-white',
          'flex items-start justify-between gap-[5px]',
          'py-2 pl-5 pr-2'
        )}
      >
        <div className='flex flex-1 flex-col gap-2 pt-1'>
          <div className='flex gap-4 text-sm font-bold'>
            <div className='flex items-center gap-[6px] text-color-label'>
              <SearchIcon />
              絞り込み検索
            </div>
            <div
              className='flex cursor-pointer items-center gap-1 text-primary'
              onClick={toggleContent}
            >
              検索条件を閉じる
              <IoIosArrowDown
                className={cn(
                  'duration-300',
                  isShowSearch ? 'rotate-0' : '-rotate-180'
                )}
              />
            </div>
          </div>
          <div
            className={cn(
              'overflow-hidden transition-all duration-500 ease-in-out',
              isShowSearch ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div
              className={cn(
                'border-t-1 border-color-border pt-2',
                'flex flex-col gap-2'
              )}
            >
              <div className='flex items-center justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-xs font-bold text-color-label'>
                      受注番号
                    </div>
                    <Input
                      variant='bordered'
                      className='flex-1'
                      classNames={{
                        inputWrapper:
                          'rounded border-1 border-color-border min-h-9',
                      }}
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-xs font-bold text-color-label'>
                      お客様関連ID①
                    </div>
                    <Input
                      variant='bordered'
                      className='flex-1'
                      classNames={{
                        inputWrapper:
                          'rounded border-1 border-color-border min-h-9',
                      }}
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-xs font-bold text-color-label'>
                      お客様関連ID②
                    </div>
                    <Input
                      variant='bordered'
                      className='flex-1'
                      classNames={{
                        inputWrapper:
                          'rounded border-1 border-color-border min-h-9 h-9',
                      }}
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-xs font-bold text-color-label'>
                      受注担当者
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      積込先
                      <br />
                      （エリア）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      積込先
                      <br />
                      （都道府県）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      積込先
                      <br />
                      （市区町村）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      荷卸先
                      <br />
                      （エリア）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      荷卸先
                      <br />
                      （都道府県）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      荷卸先
                      <br />
                      （市区町村）
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-4'>
                <div className='max-w-[372px] flex-1'>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      積込日
                    </div>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3'>
                        <DatePickerComponent />
                        〜
                        <DatePickerComponent />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex max-w-[372px] items-center justify-center gap-2'>
                  <div className='text-center text-xs font-bold text-color-label'>
                    荷卸日
                  </div>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3'>
                      <DatePickerComponent />
                      〜
                      <DatePickerComponent />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center justify-start gap-4'>
                <div className=''>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      ステータス
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='w-[125px] flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className=''>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      コース割付
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='w-[125px] flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>

                <div className=''>
                  <div className='flex items-center justify-center gap-2'>
                    <div className='text-center text-xs font-bold text-color-label'>
                      備考
                    </div>
                    <Select
                      variant={'bordered'}
                      aria-label='label'
                      className='w-[125px] flex-1'
                      classNames={{
                        trigger:
                          'rounded border border-color-border min-h-9 h-9',
                        value: 'text-color-base',
                        popoverContent: 'rounded',
                      }}
                    >
                      <SelectItem key={'1'}>{'1'}</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DropDownShowColumn columns={columns} updateColumns={updateColumns} />
          <div
            className={cn(
              'overflow-hidden transition-all duration-500 ease-in-out',
              isShowSearch ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className='pt-[15px]'>
              <ButtonComponent className='flex h-[34px] w-full gap-[6px] bg-color-selected text-sm text-white'>
                <FiSearch className='h-5 w-5' />
                絞り込み
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

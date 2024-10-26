'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import CheckboxComponent from '@/app/components/common/element/CheckboxComponent';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import { RadioComponent } from '@/app/components/common/element/RadioComponent';
import { ArrowDown } from '@/app/components/svg';
import TitleComponent from '@/app/components/common/TitleComponent';
import { HEIGHT_HEAD } from '@/app/constants/constant';
import { useLayoutPage } from '@/app/store/layoutPage';
import { RadioGroup } from '@nextui-org/react';

import React, { useEffect } from 'react';

type Props = {};

/**
 *
 * @page SRV0101
 */

const CreateCourse = (props: Props) => {
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
        href: '/course/create-course',
        text: 'グループからコース作成',
      },
    ]);
  }, [saveBreadcrumbs]);
  return (
    <div className='p-10 pb-36 pt-7'>
      <p className='text-2xl font-bold leading-[30px]'>コース作成(STEP 1/2)</p>
      <div className='mt-[30px] flex gap-9'>
        <form className='flex flex-1 flex-col'>
          <div>
            <TitleComponent
              content='グループ作成の条件を設定'
              id='create-group'
            />
            <div className='mt-[30px] flex gap-6'>
              <CheckboxComponent>積込先集約店でグループ作成</CheckboxComponent>
              <CheckboxComponent>荷卸先集約店でグループ作成</CheckboxComponent>
            </div>
          </div>
          <div className='mt-[51px] flex flex-col gap-6'>
            <TitleComponent
              content='コース作成対象の絞り込み条件を設定'
              id='filter-create'
            />
            <div className='mt-2 flex gap-5 border-b border-color-2rd-border pb-3'>
              <p className='w-[200px] font-bold text-color-label'>引越/一般</p>
              <RadioGroup
                orientation='horizontal'
                defaultValue={'引越'}
                classNames={{ wrapper: 'gap-4' }}
              >
                <RadioComponent value={'引越'}>引越</RadioComponent>
                <RadioComponent value={'一般'}>一般</RadioComponent>
                <RadioComponent value={'混載'}>混載</RadioComponent>
              </RadioGroup>
            </div>
            <div className='flex items-center gap-5 border-b border-color-2rd-border pb-3'>
              <p className='w-[200px] font-bold text-color-label'>積込日</p>
              <div className='flex items-center'>
                <DatePickerComponent className='h-12 w-[192px] text-sm' />
                <span className='mx-2'>〜</span>
                <DatePickerComponent className='h-12 w-[192px] text-sm' />
              </div>
            </div>
            <div className='flex items-center gap-5 border-b border-color-2rd-border pb-3'>
              <p className='w-[200px] font-bold text-color-label'>荷卸日</p>
              <div className='flex items-center'>
                <DatePickerComponent className='h-12 w-[192px] text-sm' />
                <span className='mx-2'>〜</span>
                <DatePickerComponent className='h-12 w-[192px] text-sm' />
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <p className='border-b border-color-2rd-border pb-[18.5px] text-xl font-bold leading-[25px]'>
              荷卸先エリアを選択してください
            </p>
            <div className='mt-6 flex gap-7 border-b border-color-border pb-6'>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    北海道方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
                <CheckboxComponent>
                  <div className='flex items-center gap-2'>
                    北海道
                    <span className='text-[18px] font-bold text-primary'>
                      {'1'}
                    </span>
                    <span className='text-xs'>件</span>
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    東北方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'19'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'12'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    関東方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'11'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'14'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    茨城県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'10'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
              </div>

              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    甲信方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    新潟県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'1'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    新潟県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'14'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
                <CheckboxComponent className='max-w-[140px]'>
                  <div className='flex w-full items-center'>
                    新潟県
                    <div className='flex flex-1 items-center justify-end gap-1'>
                      <span className='text-[18px] font-bold text-primary'>
                        {'23'}
                      </span>
                      <span className='text-xs'>件</span>
                    </div>
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    中京方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
            </div>
            <div className='mt-6 flex gap-7 border-b border-color-border pb-6'>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    北陸方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    関西方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    四国方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    中国方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
              <div className='flex w-full flex-col gap-6 border-r border-color-2rd-border'>
                <CheckboxComponent>
                  <div className='flex items-center gap-2 font-bold text-placeholder'>
                    中京方面 <ArrowDown />
                  </div>
                </CheckboxComponent>
              </div>
            </div>
          </div>
        </form>
        <div className='sticky top-[152px] flex min-w-56 flex-col gap-4 self-start'>
          <p className='mt-4 text-xs font-bold leading-[15px]'>目次</p>
          <div
            className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
            onClick={() => {
              const createGroup =
                document.getElementById('create-group')?.offsetTop;
              if (createGroup)
                window.scrollTo({
                  top: createGroup - HEIGHT_HEAD,
                  behavior: 'smooth',
                });
            }}
          >
            <p className='leading-5'>グループ作成の条件を設定</p>
            <div className='text-primary'>
              <ArrowDown />
            </div>
          </div>
          <div
            className='flex cursor-pointer items-center justify-between border-b border-color-border pb-1 text-primary'
            onClick={() => {
              const filterCreate =
                document.getElementById('filter-create')?.offsetTop;
              if (filterCreate)
                window.scrollTo({
                  top: filterCreate - HEIGHT_HEAD,
                  behavior: 'smooth',
                });
            }}
          >
            <p className='leading-5'>コース作成対象の絞り込み条件を設定</p>
            <div className='text-primary'>
              <ArrowDown />
            </div>
          </div>
          <div className='mt-[52px] flex flex-col gap-2'>
            <ButtonComponent className='h-[54px] w-full bg-primary text-white'>
              次へ
            </ButtonComponent>
            <ButtonComponent className='h-[54px] w-full'>
              コース作成をキャンセル
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;

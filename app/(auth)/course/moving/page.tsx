'use client';
import AutocompleteComponent from '@/app/components/common/element/AutocompleteComponent';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import StickyAction from '@/app/components/course/StickyAction';
import DetailRow from '@/app/components/common/DetailRow';
import LinkPaymentOrder from '@/app/components/common/modal/LinkPaymentOrder';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import DeliveryStatus from '@/app/components/common/DeliveryStatus';
import InputComponent from '@/app/components/common/element/InputComponent';
import ModalComponent from '@/app/components/common/ModalComponent';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import {
  ArrowDown,
  ArrowRight,
  Convert,
  Document,
  Home,
  Magnifying,
  PencilEdit,
  Plus,
} from '@/app/components/svg';
import TableCreateCourseModal from '@/app/components/course/TableCreateCourseModal';
import TableDetailCourseMoving from '@/app/components/course/TableDetailCourseMoving';
import TitleComponent from '@/app/components/common/TitleComponent';
import { courseInfo, linkHref } from '@/app/constants/course.cont';
import { BASIC_INFO, DISTRIBUTE_INFO } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { schemaCourseList } from '@/app/utils/schemas/course';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, cn, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

type Props = {};

type IFormCourseList = z.infer<typeof schemaCourseList>;

/**
 *
 * @page SRV0103
 */

const DetailCourseMoving = (props: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  useEffect(() => {
    saveBreadcrumbs([
      {
        href: '/dashboard',
        text: 'ホーム',
      },
      {
        href: '/course',
        text: 'コース一覧',
      },
      {
        href: '/course/moving',
        text: '詳細',
      },
    ]);
  }, [saveBreadcrumbs]);
  const {
    isOpen: isCreateOrder,
    onOpen: onCreateOrder,
    onOpenChange: onCreateOrderChange,
    onClose: onCloseCreateOrder,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const { control, handleSubmit, watch } = useForm<IFormCourseList>({
    resolver: zodResolver(schemaCourseList),
  });

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

  const [isShowSearch, setIsShowSearch] = useState(false);

  return (
    <div className='p-10 pb-16 pt-7'>
      <div className='flex items-center gap-4 font-bold'>
        <span className='font-bold text-color-label'>グループID</span>
        <span className='text-2xl leading-[30px]'>0307010</span>
        <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
          <Home /> <span>引越</span>
        </div>
      </div>
      <div className='mt-[30px] flex gap-9'>
        <div className='flex-1'>
          <div className='flex flex-col gap-16'>
            <div>
              <TitleComponent content='基本情報' id='basic_information' />
              <div className='mt-6'>
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.COURSE_ID,
                      content: '05100000001',
                    },
                    {
                      label: DISTRIBUTE_INFO.REQUEST_BY,
                      content: 'ランナープロデュース',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.RESPONSIBLE_BRANCH,
                      content: '大阪支店',
                    },
                    {
                      label: DISTRIBUTE_INFO.COMPANY,
                      content: '大阪運送',
                    },
                  ]}
                />

                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.DATE,
                      content: '23/08/29',
                    },
                    {
                      label: DISTRIBUTE_INFO.DRIVER,
                      content: '田中太郎',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.UNLOAD_DATE,
                      content: '大阪支店',
                    },
                    {
                      label: DISTRIBUTE_INFO.DRIVER_CONTACT,
                      content: '080-5192-7556',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.VEHICLE_SIZE,
                      content: '10t',
                    },
                    {
                      label: BASIC_INFO.REQUEST_OPTIONS,
                      content: 'ゲート',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: DISTRIBUTE_INFO.VEHICLE_CLASS,
                      content: '10t',
                    },
                    {
                      label: DISTRIBUTE_INFO.FULL_VEHICLE_NUM,
                      content: '大阪102 あ　7556',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.TYPE,
                      content: (
                        <div className='flex h-[29px] w-[66px] items-center justify-center gap-[7px] rounded-sm border border-color-border bg-color-gray text-sm font-bold leading-[14px] text-color-selected'>
                          <Home /> <span>引越</span>
                        </div>
                      ),
                    },
                    {
                      label: DISTRIBUTE_INFO.VEHICLE_NUM,
                      content: '大阪102 あ　7556',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: DISTRIBUTE_INFO.PASSENGER_NAME,
                      content: '山田　孝之',
                    },
                    {
                      label: DISTRIBUTE_INFO.SUBCONTRACTORS,
                      content: '二次請',
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.STATUS,
                      content: (
                        <DeliveryStatus
                          status={0}
                          type='ORDER'
                          className='h-8 w-24'
                        />
                      ),
                    },
                    {
                      label: BASIC_INFO.LINK_SSCV,
                      content: (
                        <DeliveryStatus
                          status={0}
                          type='ORDER'
                          className='h-8 w-24'
                        />
                      ),
                    },
                  ]}
                />
                <DetailRow
                  items={[
                    {
                      label: BASIC_INFO.REMARKS,
                      content: (
                        <div className='flex items-center gap-[18px]'>
                          <span>テキストが入ります</span> <PencilEdit />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            <div>
              <TitleComponent content='コース情報' id='course_information' />
              <div className='mt-6 flex max-w-content-screen-table-slide gap-3 overflow-auto'>
                {courseInfo.map((item, index) => (
                  <div key={item.id} className='flex items-center gap-3'>
                    <div className='relative flex h-60 flex-col gap-2 overflow-y-auto overflow-x-hidden rounded bg-color-gray px-4 py-3'>
                      <div className='absolute right-2 top-2 cursor-pointer'>
                        <Convert />
                      </div>
                      <p className='text-[18px] font-bold leading-[22.5px]'>
                        {item.title}
                      </p>
                      <div className='flex items-center gap-1 text-[11px] font-medium leading-[11px] text-placeholder'>
                        <span>積込時間</span>
                        <span className='text-base leading-5 text-black'>
                          {item.loadingTime}
                        </span>
                        <PencilEdit />
                      </div>
                      <div className='flex items-center gap-1 text-[11px] font-medium leading-[11px] text-placeholder'>
                        <span>荷卸時間</span>
                        <span className='text-base leading-5 text-black'>
                          {item.unLoadingTime}
                        </span>
                        <PencilEdit />
                      </div>
                      <div className='flex gap-[11px] text-[14px] font-medium leading-[11px] text-placeholder'>
                        <div className='flex items-center gap-2'>
                          <span>積込</span>
                          <div className='flex items-center gap-1'>
                            <span className='border-b border-primary text-[18px] font-bold leading-[22.5px] text-primary'>
                              {item.loading}
                            </span>
                            <span className='text-black'>件</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <span>荷卸</span>
                          <div className='flex items-center gap-1'>
                            <span className='border-b border-primary text-[18px] font-bold leading-[22.5px] text-primary'>
                              {item.unLoading}
                            </span>
                            <span className='text-black'>件</span>
                          </div>
                        </div>
                      </div>
                      <div className='mt-1'>
                        {item.courses.map((course) => (
                          <div
                            key={course.id}
                            className='flex h-[30px] w-[170px] items-center justify-center gap-1 rounded-sm border border-color-border bg-white text-sm leading-[22px] shadow-popover'
                          >
                            <span>{course.id}</span>
                            <span>{course.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className={cn(
                        courseInfo.length - 1 === index && 'hidden'
                      )}
                    >
                      <ArrowRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative' id='order_information'>
              <TitleComponent content='受注情報' />
              <Button
                variant='bordered'
                startContent={
                  <div className='text-primary'>
                    <Plus />
                  </div>
                }
                className='absolute right-0 top-0 -mr-4 border-none'
                onClick={onCreateOrder}
              >
                <span className='text-sm font-bold leading-[22px] text-primary'>
                  受注追加
                </span>
              </Button>
              <div className='mt-6 w-fit border-b-1 border-color-2rd-border'>
                <TableDetailCourseMoving />
              </div>
            </div>
            <div className='relative'>
              <TitleComponent content='金額情報' id='amount_information' />
              <Button
                variant='bordered'
                startContent={
                  <div className='text-primary'>
                    <Plus />
                  </div>
                }
                className='absolute right-0 top-0 -mr-4 border-none'
              >
                <span className='text-sm font-bold leading-[22px] text-primary'>
                  支払い追加
                </span>
              </Button>
              <div>
                <div className='mt-6 flex flex-col gap-[17.5px] bg-color-gray px-5 py-4 font-bold'>
                  <div className='flex items-center'>
                    <span className='text-[18px]'>支払金額合計</span>
                    <div className='mx-2 flex-1 border border-dashed border-color-border'></div>
                    <p className='text-[28px]'>
                      13,000
                      <span className='ml-[2px] text-xs leading-[15px]'>
                        円
                      </span>
                    </p>
                  </div>
                  <div className='flex text-sm text-color-label'>
                    <span className='min- w-[100px]'>運賃</span>
                    <span className='flex-1'>基本の運賃</span>
                    <p className='text-black'>
                      10,000
                      <span className='ml-[2px] text-xs font-normal leading-[15px]'>
                        円
                      </span>
                    </p>
                  </div>
                  <div className='flex items-center text-color-label'>
                    <span className='min- w-[100px]'>待機料</span>
                    <div className='flex-1'>・・・・・・・</div>
                    <p className='text-black'>
                      1,000
                      <span className='ml-[2px] text-xs font-normal leading-[15px]'>
                        円
                      </span>
                    </p>
                    <LinkPaymentOrder type={'logistic'} />
                  </div>
                  <p className='text-sm'>未承認の付帯料金</p>
                  <div className='flex items-center gap-4 text-sm text-color-label'>
                    <p className='min- w-[100px]'>高速代</p>
                    <p className='flex-1'>積み地待機のため、交渉済み</p>
                    <Document />
                    <p className='text-black'>
                      2,000
                      <span className='text-xs font-normal leading-[15px]'>
                        円
                      </span>
                    </p>
                    <ButtonComponent
                      className='h-[30px] w-[68px]'
                      variant='solid'
                      color='primary'
                    >
                      承認
                    </ButtonComponent>
                    <ButtonComponent className='h-[30px] w-[68px]'>
                      却下
                    </ButtonComponent>
                  </div>
                </div>
                <div className='mt-[22px] bg-color-gray p-5'>
                  <p className='text-[18px] font-bold leading-[22.5px]'>
                    会計情報
                  </p>
                  <div className='mt-5 flex h-[65px] w-full items-center justify-center gap-[30px] bg-white px-10 text-sm'>
                    <div className='flex w-full items-center'>
                      <span className='font-bold text-color-label'>
                        支払基準日
                      </span>
                      <div className='mx-2 flex-1 border border-dashed border-color-border'></div>
                      <span>23/08/30</span>
                    </div>
                    <div className='flex w-full items-center'>
                      <span className='font-bold text-color-label'>
                        支払締日
                      </span>
                      <div className='mx-2 flex-1 border border-dashed border-color-border'></div>
                      <span>23/08/30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-[19px]'>
              <ButtonComponent className='h-[54px] w-56'>
                コース一覧に戻る
              </ButtonComponent>
              <ButtonComponent
                className='h-[54px] w-56 border-none bg-color-error text-white'
                onClick={onOpenDelete}
              >
                削除
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className='sticky top-[152px] flex min-w-56 flex-col gap-4 self-start'>
          <StickyAction LinkHref={linkHref} />
          <div>
            <ButtonComponent className='h-[54px] w-full bg-primary text-white'>
              SSCV連携
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isCreateOrder}
        onOpenChange={onCreateOrderChange}
        className='max-w-[1200px]'
        classNames={{
          base: 'max-h-[840px]',
        }}
      >
        <div className='px-10 pt-8 text-2xl font-bold leading-[30px] text-color-base'>
          受注追加
        </div>
        <div className='mx-5 mt-7 flex justify-start gap-[14px] rounded border border-color-border px-5 py-3'>
          <div className='flex flex-1 flex-col'>
            <div
              className={cn(
                'flex gap-4 border-color-border text-sm font-bold',
                isShowSearch && 'border-b pb-2'
              )}
            >
              <div className='flex items-center gap-2'>
                <Magnifying />
                <span className='text-color-label'>絞り込み検索</span>
              </div>
              <div
                className='flex cursor-pointer select-none items-center gap-2'
                onClick={() => setIsShowSearch(!isShowSearch)}
              >
                <span className='text-primary'>
                  {isShowSearch ? '検索条件を閉じる' : '検索条件を開く'}
                </span>
                <div className={cn(isShowSearch ? 'rotate-0' : 'rotate-180')}>
                  <div className='text-primary'>
                    <ArrowDown />
                  </div>
                </div>
              </div>
            </div>
            {isShowSearch && (
              <div className='mt-2'>
                <div>
                  <div className='flex flex-1 flex-col gap-2 text-xs font-bold leading-[15px] text-color-label'>
                    <div className='flex justify-between gap-4'>
                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>積込先</span>
                          <span>（エリア）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>

                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>積込先</span>
                          <span>（都道府県）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>

                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>積込先</span>
                          <span>（市区町村）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>
                    </div>

                    <div className='flex justify-between gap-4'>
                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>荷卸先</span>
                          <span>（エリア）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>

                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>荷卸先</span>
                          <span>（都道府県）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>

                      <div className='flex items-center gap-2'>
                        <p className='flex w-fit flex-col items-center'>
                          <span>荷卸先</span>
                          <span>（市区町村）</span>
                        </p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full max-w-none flex-1'
                        />
                      </div>
                    </div>

                    <div className='flex w-full justify-between gap-4'>
                      <div className='flex w-full items-center gap-2'>
                        <span className='w-fit'>積込日</span>
                        <Controller
                          control={control}
                          name='loadingDateStart'
                          render={({
                            field: { value, ...field },
                            fieldState,
                          }) => (
                            <div className='flex flex-1 flex-col'>
                              <DatePickerComponent
                                className='h-9 w-full max-w-none flex-1 text-sm'
                                selected={value}
                                selectsStart
                                startDate={watch('loadingDateStart')}
                                endDate={watch('loadingDateEnd')}
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
                        <span>〜</span>
                        <Controller
                          control={control}
                          name='loadingDateEnd'
                          render={({
                            field: { value, ...field },
                            fieldState,
                          }) => (
                            <div className='flex flex-1 flex-col'>
                              <DatePickerComponent
                                className='h-9 w-full max-w-none flex-1 text-sm'
                                selected={value}
                                selectsEnd
                                startDate={watch('loadingDateStart')}
                                endDate={watch('loadingDateEnd')}
                                minDate={watch('loadingDateStart')}
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

                      <div className='flex w-full items-center gap-2'>
                        <span className='w-fit'>荷卸日</span>
                        <Controller
                          control={control}
                          name='loadingDateStart'
                          render={({
                            field: { value, ...field },
                            fieldState,
                          }) => (
                            <div className='flex flex-1 flex-col'>
                              <DatePickerComponent
                                className='h-9 w-full max-w-none flex-1 text-sm'
                                selected={value}
                                selectsStart
                                startDate={watch('loadingDateStart')}
                                endDate={watch('loadingDateEnd')}
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
                        <span>〜</span>
                        <Controller
                          control={control}
                          name='loadingDateEnd'
                          render={({
                            field: { value, ...field },
                            fieldState,
                          }) => (
                            <div className='flex flex-1 flex-col'>
                              <DatePickerComponent
                                className='h-9 w-full max-w-none flex-1 text-sm'
                                selected={value}
                                selectsEnd
                                startDate={watch('loadingDateStart')}
                                endDate={watch('loadingDateEnd')}
                                minDate={watch('loadingDateStart')}
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

                      <div className='flex flex-1 items-center gap-2'>
                        <p className='w-6'>種別</p>
                        <AutocompleteComponent
                          items={animals}
                          className='h-9 w-full min-w-[172px] max-w-none flex-1'
                        />
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <div className='flex items-center gap-2'>
                        <div className='w-fit'>立米数</div>
                        <div className='flex items-center gap-4'>
                          <InputComponent className='h-9 !w-[74px] rounded' />
                          <div>〜</div>
                          <InputComponent className='h-9 !w-[74px] rounded' />
                        </div>
                      </div>

                      <div className='flex items-center gap-2'>
                        <div className='w-fit'>数量</div>
                        <div className='flex items-center gap-4'>
                          <InputComponent className='h-9 !w-[74px] rounded' />
                          <div>〜</div>
                          <InputComponent className='h-9 !w-[74px] rounded' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {isShowSearch && (
            <div className='mt-[24px]'>
              <ButtonComponent
                startContent={<Magnifying color='white' />}
                className='h-[30px] w-[118px] bg-color-selected text-white'
              >
                絞り込み
              </ButtonComponent>
            </div>
          )}
        </div>

        <div className='mx-10 mb-[23px] mt-4'>
          <TableCreateCourseModal />

          <div className='mt-[23px] flex justify-between'>
            <div className='text-sm leading-[17.5px]'>50件表示 / 70件中</div>
            <PaginationComponent />
          </div>
        </div>

        <div className='flex justify-between border-t-1 border-color-border px-6 py-[15px]'>
          <Button
            className='bg-transparent text-base font-bold leading-5'
            onClick={onCloseCreateOrder}
          >
            キャンセル
          </Button>

          <ButtonComponent
            className='h-10 w-[152px] rounded bg-primary text-white'
            onClick={onCloseCreateOrder}
          >
            受注追加
          </ButtonComponent>
        </div>
      </ModalComponent>

      <ModalComponent
        isOpen={isOpenDelete}
        onOpenChange={onOpenChangeDelete}
        className='flex h-[280px] min-h-[280px] max-w-[520px] items-center justify-center'
      >
        <div className='flex flex-col items-center justify-center text-2xl font-bold'>
          <p>コースを削除します</p>
          <p>よろしいですか？</p>
        </div>
        <p className='mb-[35px] mt-4 text-sm text-color-error'>
          コースに紐づいている受注は、未割付状態に戻ります。
        </p>
        <div className='flex justify-center gap-5'>
          <ButtonComponent className='w-40'>戻る</ButtonComponent>
          <div className='h-9 w-[1px] bg-color-border'></div>
          <ButtonComponent className='w-40 text-white' variant='solid'>
            確定
          </ButtonComponent>
        </div>
      </ModalComponent>
    </div>
  );
};

export default DetailCourseMoving;

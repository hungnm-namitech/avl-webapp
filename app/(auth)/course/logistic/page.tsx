'use client';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import StickyAction from '@/app/components/course/StickyAction';
import DetailRow from '@/app/components/common/DetailRow';
import LinkPaymentOrder from '@/app/components/common/modal/LinkPaymentOrder';
import DeliveryStatus from '@/app/components/common/DeliveryStatus';
import ModalComponent from '@/app/components/common/ModalComponent';
import {
  ArrowRight,
  Convert,
  Document,
  Home,
  PencilEdit,
  Plus,
} from '@/app/components/svg';
import TableDetailCourseLogistic from '@/app/components/course/TableDetailCourseLogistic';
import TabsCourse from '@/app/components/course/TabsCourse';
import TitleComponent from '@/app/components/common/TitleComponent';
import { HEIGHT_HEAD } from '@/app/constants/constant';
import { courseInfo, linkHref } from '@/app/constants/course.cont';
import { BASIC_INFO, DISTRIBUTE_INFO } from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import { Button, cn, useDisclosure } from '@nextui-org/react';
import React, { useEffect } from 'react';

type Props = {};

/**
 *
 * @page SRV0103
 */

const DetailCourseLogistic = (props: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onOpenChange: onOpenChangeDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
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
        href: '/course/logistic',
        text: '詳細',
      },
    ]);
  }, [saveBreadcrumbs]);
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
                      content: '05100000001',
                    },
                    {
                      label: DISTRIBUTE_INFO.FULL_VEHICLE_NUM,
                      content: 'ランナープロデュース',
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
                      content: '7556',
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
            <div className='relative'>
              <TitleComponent content='受注情報' id='order_information' />
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
                  受注追加
                </span>
              </Button>
              <div className='mt-6 w-fit border-b-1 border-color-2rd-border'>
                <TableDetailCourseLogistic />
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
                onPress={onOpenDelete}
              >
                削除
              </ButtonComponent>
            </div>
          </div>
        </div>
        <div className='sticky top-[152px] flex min-w-56 flex-col gap-4 self-start'>
          <StickyAction LinkHref={linkHref} />
          <div className='mt-4'>
            <ButtonComponent className='h-[54px] w-full bg-primary text-white'>
              SSCV連携
            </ButtonComponent>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpenDelete}
        onOpenChange={onOpenChangeDelete}
        className='flex h-[280px] min-h-[280px] max-w-[520px] items-center justify-center'
      >
        <div className='flex flex-col items-center justify-center text-2xl font-bold text-color-base'>
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

export default DetailCourseLogistic;

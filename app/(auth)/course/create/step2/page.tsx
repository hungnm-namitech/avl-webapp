'use client';

import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import InputComponent from '@/app/components/common/element/InputComponent';
import Header from '@/app/components/common/Header';
import ModalComponent from '@/app/components/common/ModalComponent';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import TableCreateCourse from '@/app/components/course/TableCreateCourse';
import { Warning2 } from '@/app/components/svg';
import { useLayoutPage } from '@/app/store/layoutPage';
import { useDisclosure } from '@nextui-org/react';
import React, { useEffect } from 'react';

type Props = {};

/**
 *
 * @page ORD0101
 */

const CreateCourseTable = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isCreateCourse,
    onOpen: onCreateCourse,
    onOpenChange: onChangeCreateCourse,
  } = useDisclosure();
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
    <div>
      <Header>
        <div className='flex gap-2'>
          <ButtonComponent>コース作成をキャンセル</ButtonComponent>
          <ButtonComponent
            variant='solid'
            color='primary'
            onPress={onCreateCourse}
          >
            コース作成
          </ButtonComponent>
        </div>
      </Header>
      <div className='mx-10 my-7 flex h-full flex-col justify-between'>
        <div>
          <p className='text-2xl font-bold leading-[30px]'>
            コース作成(STEP 2/2)
          </p>
          <div className='mt-3 flex w-fit gap-2 border-b border-color-border pb-2'>
            <div className='flex gap-2 text-sm leading-[17.5px]'>
              <span className='font-bold text-color-label'>作成条件:</span>
              <span>荷卸先集約店でグループ作成</span>
            </div>
            <div className='flex gap-2 text-sm leading-[17.5px]'>
              <span className='font-bold text-color-label'>絞り込み条件:</span>
              <span></span>
            </div>
            <div className='flex gap-2 text-sm leading-[17.5px]'>
              <span className='font-bold text-color-label'>積込日：</span>
              <p className='flex gap-[6px]'>
                23/08/25 (金)
                <span>〜</span>23/08/27 (日)
              </p>
            </div>
            <div className='flex gap-2 text-sm leading-[17.5px]'>
              <span className='font-bold text-color-label'>荷卸日：</span>
              <p className='flex gap-[6px]'>
                23/08/25 (金)
                <span>〜</span>23/08/27 (日)
              </p>
            </div>
            <div className='flex gap-2 text-sm leading-[17.5px]'>
              <span className='font-bold text-color-label'>荷卸先：</span>
              <span>関東方面、山梨県</span>
            </div>
          </div>
          <div className='mt-5'>
            <TableCreateCourse />
          </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm leading-[17.5px]'>50件表示 / 1230件中</p>
          <PaginationComponent />
        </div>
        <div className='fixed bottom-16 flex h-[60px] w-[83%] items-center gap-8 rounded border border-color-2rd-border bg-white px-[17px] shadow-option'>
          <span className='font-bold leading-[22.5px] text-primary'>
            キャンセル
          </span>
          <div className='ml-16 flex items-center gap-2'>
            <span className='text-[18px] font-bold leading-[22.5px] text-primary underline'>
              2
            </span>
            <span>件選択中</span>
            <InputComponent
              className='h-9 w-60 rounded'
              placeholder='グループを入力してください'
            />
            <ButtonComponent className='bg-primary text-white'>
              変更
            </ButtonComponent>
          </div>
          <div className='flex gap-[17px]'>
            <ButtonComponent className='bg-primary text-white' onPress={onOpen}>
              コース作成
            </ButtonComponent>
            <ButtonComponent>コース作成から外す</ButtonComponent>
          </div>
        </div>
        <ModalComponent
          className='min-h-[160px] min-w-[480px] items-center pt-8'
          classNameClose='right-3 top-3'
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <div className='text-center font-bold'>
            <p>調整したグループIDでコースを作成します。</p>
            <p>よろしいですか？</p>
          </div>
          <div className='mt-[29px] flex justify-center gap-5'>
            <ButtonComponent className='w-40'>戻る</ButtonComponent>
            <div className='h-9 w-[1px] bg-color-border'></div>
            <ButtonComponent className='w-40 text-white' variant='solid'>
              確定
            </ButtonComponent>
          </div>
        </ModalComponent>

        <ModalComponent
          isOpen={isCreateCourse}
          onOpenChange={onChangeCreateCourse}
          className='min-h-[180px] min-w-[480px] items-center pt-8'
          classNameClose='top-3 right-3'
        >
          <div className='text-center font-bold'>
            <div className='flex gap-1'>
              <Warning2 />
              <p>同じグループIDで選択漏れの受注があります。</p>
            </div>
            <p>コースを作成してよろしいですか？</p>
          </div>
          <div className='mt-[34px] flex justify-center gap-5'>
            <ButtonComponent className='w-40'>戻る</ButtonComponent>
            <div className='h-9 w-[1px] bg-color-border'></div>
            <ButtonComponent className='w-40 text-white' variant='solid'>
              確定
            </ButtonComponent>
          </div>
        </ModalComponent>
      </div>
    </div>
  );
};

export default CreateCourseTable;

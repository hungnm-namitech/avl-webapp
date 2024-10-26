'use client';

import DropdownEditOrder from '@/app/components/order/DropdownEditOrder';
import LogisticSearch from '@/app/components/order/LogisticSearch';
import PaginationComponent from '@/app/components/common/PaginationComponent';
import { ArrowDown, Magnifying, Plus } from '@/app/components/svg';
import TableOrderListLogistic from '@/app/components/order/TableOrderListLogistic';
import {
  IMPORT_ORDER,
  ORDER_TYPE,
  ORDER_TYPE_LABEL,
  orderListEdit,
} from '@/app/constants/order.const';
import { useLayoutPage } from '@/app/store/layoutPage';
import {
  Button,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Select,
  Selection,
  SelectItem,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Header from '@/app/components/common/Header';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';
import { useRouter } from 'next-nprogress-bar';
import SearchIcon from '@/app/components/svg/common/Search';
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import DatePickerComponent from '@/app/components/common/element/DatePickerComponent';
import FilterAdvanceLogistic from '@/app/components/order/logistic/FilterAdvanceLogistic';
import EmptyData from '@/app/components/order/EmptyData';
import DropDownShowColumn from '@/app/components/order/DropDownShowColumn';
import TableOrderLogistic from '@/app/components/order/logistic/TableOrderLogistic';
import { useQuery } from '@tanstack/react-query';
import { useAxiosAuth } from '@/app/libs/axios';

/**
 *
 * @page ORD0101
 */

export default function OrderLogistic() {
  const { push } = useRouter();

  const axiosAuth = useAxiosAuth();

  const [dataListOrder, setDataListOrder] = useState([]);

  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);

  const valuePage = new Set([ORDER_TYPE.LOGISTICS]);

  const rowsPerPage = 50;

  const [total, setTotal] = useState(0);
  const [page, setPage] = React.useState(1);

  const [columns, updateColumns] = useState([
    { label: '受注番号', id: 'orderNum', show: true, sort: '' },
    { label: 'ステータス ', id: 'status', show: true, sort: '' },
    { label: 'コース割付', id: 'courseAllocation', show: true, sort: '' },
    { label: '得意先名', id: 'generalCustomer', show: true, sort: '' },
    { label: '積込日', id: 'loadingDate', show: true, sort: '' },
    { label: '積込時間', id: 'loadingTime', show: true, sort: '' },
    { label: '最終積込時間', id: 'finalLoadingTime', show: true, sort: '' },
    {
      label: '積込先(エリア)',
      id: 'loadingDestArea',
      show: true,
      sort: '',
    },
    {
      label: '積込先(都道府県）',
      id: 'destinationPrefecture',
      show: true,
      sort: '',
    },
    { label: '積込先(市区長村)', id: 'loadingDestCity', show: true, sort: '' },
    { label: '荷卸日', id: 'unloadingDate', show: true, sort: '' },
    { label: '荷卸時間', id: 'destinationCity', show: true, sort: '' },
    { label: '荷卸先(エリア)', id: 'unloadingDestArea', show: true, sort: '' },
    {
      label: '荷卸先(都道府県)',
      id: 'unloadingDestPrefecture',
      show: true,
      sort: '',
    },
    {
      label: '荷卸先(市区町村)',
      id: 'unloadingDestCity',
      show: true,
      sort: '',
    },
    { label: '要望車格オプション', id: 'desiredVehicle', show: true, sort: '' },
    { label: '荷姿', id: 'packaging', show: true, sort: '' },
    { label: '数量', id: 'quantity', show: true, sort: '' },
    { label: '売上金額合計', id: 'totalSales', show: true, sort: '' },
    { label: 'コースID', id: 'courseId', show: true, sort: '' },
    { label: '距離', id: 'distance', show: true, sort: '' },
    { label: 'お客様関連ID①', id: 'customerRelatedID1', show: true, sort: '' },
    { label: 'お客様関連ID②', id: 'customerRelatedID2', show: true, sort: '' },
    { label: '備考', id: 'remarks', show: true, sort: '' },
    { label: '車格', id: 'vehicleSize', show: true, sort: '' },
    { label: '依頼先', id: 'requestBy', show: true, sort: '' },
    { label: '実走会社', id: 'actualCompany', show: true, sort: '' },
    { label: '支払金額合計', id: 'totalPayment', show: true, sort: '' },
    { label: '受注支店', id: 'orderBranch', show: true, sort: '' },
    { label: '担当支店', id: 'branchInCharge', show: true, sort: '' },
    { label: '受注担当者', id: 'orderTaker', show: true, sort: '' },
    { label: '請求支店', id: 'billingBranch', show: true, sort: '' },
  ]);

  const onChangeSelection = (selection: Selection) => {
    const selectedValue = Array.from(selection).join(', ');
    switch (selectedValue) {
      case ORDER_TYPE.MOVING:
        push('/order/moving');
        break;
      case ORDER_TYPE.MASTER:
        push('/order/master');
        break;
      default:
        break;
    }
  };

  const { isLoading } = useQuery({
    queryKey: [`/orders/generals`, columns, page, rowsPerPage],
    queryFn: async () => {
      const sortParams = columns
        .filter((column) => column.sort)
        .map((column) => (column.sort === 'asc' ? column.id : `-${column.id}`))
        .join(',');

      const response = await axiosAuth.get(
        `/orders/generals?perPage=${rowsPerPage}&sort=${sortParams}&page=${page}`
      );
      if (response?.data?.data) {
        setDataListOrder(response.data.data);
        setTotal(response.data.meta.total);
      }
      return response.data;
    },
  });

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
    ]);
  }, [saveBreadcrumbs]);

  return (
    <div>
      <Header>
        <div className='flex gap-[38px]'>
          <Select
            variant={'bordered'}
            aria-labelledby='label'
            label=''
            className='w-[120px]'
            selectedKeys={valuePage}
            classNames={{
              trigger: 'rounded border border-color-border min-h-9 h-9',
              value: 'text-color-base',
              popoverContent: 'rounded',
            }}
            onSelectionChange={(selection) => onChangeSelection(selection)}
          >
            {Object.entries(ORDER_TYPE_LABEL).map(([key, item]) => (
              <SelectItem key={key}>{item}</SelectItem>
            ))}
          </Select>
          <div className='flex gap-2'>
            <ButtonComponent>グループからコース作成</ButtonComponent>
            <ButtonComponent>データ出力</ButtonComponent>
            <Dropdown
              classNames={{
                content: 'rounded-none min-w-[140px]',
              }}
            >
              <DropdownTrigger>
                <ButtonComponent>データ取り込み</ButtonComponent>
              </DropdownTrigger>
              <DropdownMenu
                aria-label='import-data'
                classNames={{
                  base: '!w-[140px] min-w-[140px]',
                }}
              >
                {Object.entries(IMPORT_ORDER).map(
                  ([key, item], index, array) => (
                    <DropdownItem
                      showDivider={index !== array.length - 1}
                      className='h-[47px] text-sm text-color-base'
                      key={key}
                    >
                      {item}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            </Dropdown>

            <ButtonComponent className='flex gap-[6px] bg-primary text-white'>
              <Plus className='w-5' />
              新規登録
            </ButtonComponent>
          </div>
        </div>
      </Header>

      <FilterAdvanceLogistic columns={columns} updateColumns={updateColumns} />
      {isLoading || dataListOrder?.length ? (
        <TableOrderLogistic
          columns={columns}
          isLoading={isLoading}
          data={dataListOrder}
          rowsPerPage={rowsPerPage}
          total={total}
          updateColumns={updateColumns}
          page={page}
          setPage={setPage}
        />
      ) : (
        <EmptyData title='検索結果がありません' />
      )}

      {/* <div className='mx-8 flex h-[95%] flex-col justify-between'>
        <div>
          <TableOrderListLogistic />
        </div>
        <div className='flex justify-between'>
          <p className='text-sm leading-[17.5px]'>50件表示 / 1230件中</p>
          <PaginationComponent />
        </div>
      </div> */}
    </div>
  );
}

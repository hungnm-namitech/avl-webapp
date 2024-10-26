'use client';

import React, { Key, useCallback } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Selection,
  SortDescriptor,
  Tooltip,
} from '@nextui-org/react';
import { COURSE_ALLOCATION, ORDER_STATUS } from '../../constants/order.const';
import { ArrowDown, ArrowSort, Calendar, PencilEdit } from '../svg';
import DeliveryStatus from '../common/DeliveryStatus';

const columns = [
  { name: '受注番号', uid: 'order', sortable: true },
  { name: 'ステータス ', uid: 'status', sortable: true },
  { name: 'コース割付', uid: 'courseAllocation', sortable: true },
  { name: '得意先名', uid: 'generalCustomer', sortable: true },
  { name: '積込日', uid: 'loadingDate', sortable: true },
  { name: '積込時間', uid: 'loadingTime', sortable: true },
  { name: '最終積込時間', uid: 'finalLoadingTime', sortable: true },
  {
    name: '積込先(エリア)',
    uid: 'loadingDestArea',
    sortable: true,
  },
  { name: '積込先(都道府県）', uid: 'destinationPrefecture', sortable: true },
  { name: '積込先(市区長村)', uid: 'loadingDestCity', sortable: true },
  { name: '荷卸日', uid: 'unloadingDate', sortable: true },
  { name: '荷卸時間', uid: 'destinationCity', sortable: true },
  { name: '荷卸先(エリア)', uid: 'unloadingDestArea', sortable: true },
  { name: '荷卸先(都道府県)', uid: 'unloadingDestPrefecture', sortable: true },
  { name: '荷卸先(市区町村)', uid: 'unloadingDestCity', sortable: true },
  { name: '要望車格オプション', uid: 'desiredVehicle', sortable: true },
  { name: '荷姿', uid: 'packaging', sortable: true },
  { name: '数量', uid: 'quantity', sortable: true },
  { name: '売上金額合計', uid: 'totalSales', sortable: true },
  { name: 'コースID', uid: 'courseId', sortable: true },
  { name: '距離', uid: 'distance', sortable: true },
  { name: 'お客様関連ID①', uid: 'customerRelatedID1', sortable: true },
  { name: 'お客様関連ID②', uid: 'customerRelatedID2', sortable: true },
  { name: '備考', uid: 'remarks', sortable: true },
  { name: '車格', uid: 'vehicleSize', sortable: true },
  { name: '依頼先', uid: 'requestBy', sortable: true },
  { name: '実走会社', uid: 'actualCompany', sortable: true },
  { name: '支払金額合計', uid: 'totalPayment', sortable: true },
  { name: '受注支店', uid: 'orderBranch', sortable: true },
  { name: '担当支店', uid: 'branchInCharge', sortable: true },
  { name: '受注担当者', uid: 'orderTaker', sortable: true },
  { name: '請求支店', uid: 'billingBranch', sortable: true },
];

const orders = [
  {
    order: '0000000001',
    status: ORDER_STATUS.COMPLETE,
    courseAllocation: COURSE_ALLOCATION.ALLOCATED,
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingTime: '16:20',
    finalLoadingTime: '17:23',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    loadingDestCity: '佐世保市',
    unloadingDate: '23/08/20 (日)',
    destinationCity: '長岡京市',
    unloadingDestArea: '',
    unloadingDestPrefecture: '',
    unloadingDestCity: '',
    desiredVehicle: '',
    packaging: '10',
    quantity: '15',
    totalSales: '50,210',
    courseId: '',
    distance: '50',
    customerRelatedID1: '0123456',
    customerRelatedID2: '012345',
    remarks: '11:00ごろ作業完了予定。',
    vehicleSize: '10t',
    requestBy: 'ランナープロデュース',
    actualCompany: '',
    totalPayment: '20,000',
    orderBranch: '輸送ネット',
    branchInCharge: '大阪支店',
    orderTaker: '田中　一',
    billingBranch: '大阪支店',
  },
  {
    order: '0000000002',
    status: ORDER_STATUS.WAITING_LIST,
    courseAllocation: COURSE_ALLOCATION.NOT_ASSIGNED,
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingTime: '16:20',
    finalLoadingTime: '17:23',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    loadingDestCity: '佐世保市',
    unloadingDate: '23/08/20 (日)',
    destinationCity: '長岡京市',
    unloadingDestArea: '',
    unloadingDestPrefecture: '',
    unloadingDestCity: '',
    desiredVehicle: '',
    packaging: '10',
    quantity: '15',
    totalSales: '20,210',
    courseId: '',
    distance: '500',
    customerRelatedID1: '0123456',
    customerRelatedID2: '012345',
    remarks: '11:00ごろ作業完了予定。',
    vehicleSize: '10t',
    requestBy: 'ランナープロデュース',
    actualCompany: '',
    totalPayment: '40,000',
    orderBranch: '輸送ネット',
    branchInCharge: '大阪支店',
    orderTaker: '田中　一',
    billingBranch: '大阪支店',
  },
  {
    order: '0000000003',
    status: ORDER_STATUS.COMPLETE,
    courseAllocation: COURSE_ALLOCATION.ALLOCATED,
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingTime: '16:20',
    finalLoadingTime: '17:23',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    loadingDestCity: '佐世保市',
    unloadingDate: '23/08/20 (日)',
    destinationCity: '長岡京市',
    unloadingDestArea: '',
    unloadingDestPrefecture: '',
    unloadingDestCity: '',
    desiredVehicle: '',
    packaging: '10',
    quantity: '15',
    totalSales: '50,000',
    courseId: '',
    distance: '700',
    customerRelatedID1: '0123456',
    customerRelatedID2: '012345',
    remarks: '11:00ごろ作業完了予定。',
    vehicleSize: '10t',
    requestBy: 'ランナープロデュース',
    actualCompany: '',
    totalPayment: '100,000',
    orderBranch: '輸送ネット',
    branchInCharge: '大阪支店',
    orderTaker: '田中　一',
    billingBranch: '大阪支店',
  },
];

type Order = (typeof orders)[0];

export default function TableOrderListLogistic() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'order',
    direction: 'ascending',
  });
  const sortedItems = React.useMemo(() => {
    return orders.sort((a: Order, b: Order) => {
      const first = a[sortDescriptor.column as keyof Order];
      const second = b[sortDescriptor.column as keyof Order];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor]);

  const classNames = React.useMemo(
    () => ({
      tr: 'border-b border-color-2rd-border last:border-none h-[32px]',
      th: [
        'bg-secondary',
        'text-black',
        'border-b-[2px]',
        'border-primary',
        'font-normal',
        'text-sm',
        'leading-[17.5px]',
        'first:rounded-none last:rounded-none',
        'h-[34px]',
      ],
      td: [
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
        'group-data-[odd=true]:before:bg-color-gray',
        'group-data-[selected=true]:before:bg-color-checked',

        'py-0 px-3 first:pl-3',
        'max-w-40 truncate whitespace-nowrap',
      ],
      sortIcon: 'hidden',
    }),
    []
  );

  const renderCell = useCallback((order: Order, columnKey: Key) => {
    const cellValue = order[columnKey as keyof Order];
    switch (columnKey) {
      case 'status':
        return <DeliveryStatus status={order.status} type='ORDER' />;
      case 'courseAllocation':
        return <DeliveryStatus status={order.courseAllocation} type='COURSE' />;
      case 'loadingDate':
        return (
          <span className='flex min-w-[150px] items-center gap-1'>
            {order.loadingDate || '-'} <Calendar />
          </span>
        );
      case 'unloadingDate':
        return (
          <span className='flex min-w-[150px] items-center gap-1'>
            {order.unloadingDate || '-'} <Calendar />
          </span>
        );
      case 'order':
        return <span className='text-primary'>{order.order || '-'}</span>;

      case 'distance':
        return (
          <span className='flex items-center gap-2'>
            {order.distance || '-'}km
          </span>
        );
      case 'remarks':
        return (
          <Tooltip
            content={order.remarks}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center gap-2'>
              <span className='truncate'>{order.remarks || '-'}</span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'customerRelatedID1':
        return (
          <span className='flex items-center gap-2'>
            {order.customerRelatedID1 || '-'} <PencilEdit />
          </span>
        );
      case 'customerRelatedID2':
        return (
          <span className='flex items-center gap-2'>
            {order.customerRelatedID2 || '-'} <PencilEdit />
          </span>
        );
      case 'totalSales':
        return (
          <span className='flex items-center gap-2'>
            ¥{order.totalSales || '-'}
          </span>
        );
      case 'totalPayment':
        return (
          <span className='flex items-center gap-2'>
            ¥{order.totalPayment || '-'}
          </span>
        );
      case 'billingBranch':
        return (
          <div className='flex items-center gap-2'>
            <span className='max-w-[120px] truncate'>
              {order.billingBranch || '-'}
            </span>
            <ArrowDown />
          </div>
        );
      case 'orderBranch':
        return (
          <span className='flex items-center gap-2'>
            {order.orderBranch || '-'} <ArrowDown />
          </span>
        );
      case 'branchInCharge':
        return (
          <span className='flex items-center gap-2'>
            {order.branchInCharge || '-'} <ArrowDown />
          </span>
        );
      default:
        return <span>{cellValue || '-'}</span>;
    }
  }, []);

  return (
    <Table
      isStriped
      removeWrapper
      className='order-list overflow-auto'
      checkboxesProps={{
        classNames: {
          wrapper:
            'before:border-2 before:border-color-border before:rounded-[2px] before:w-4 before:h-4 w-4 h-4 after:rounded-[2px] before:bg-white',
        },
        radius: 'none',
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode='multiple'
      sortDescriptor={sortDescriptor}
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column: { name: string; uid: string; sortable: boolean }) => (
          <TableColumn
            key={column.uid}
            allowsSorting={column.sortable}
            maxWidth={160}
          >
            <div className='flex items-center gap-2'>
              <span>{column.name}</span> <ArrowSort />
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No orders found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.order}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

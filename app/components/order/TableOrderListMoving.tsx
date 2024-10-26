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
  { name: '受付番号', uid: 'receptionNumber', sortable: true },
  { name: '得意先名', uid: 'generalCustomer', sortable: true },
  { name: '積込日', uid: 'loadingDate', sortable: true },
  { name: '積込注記', uid: 'loadingNotes', sortable: true },
  {
    name: '積込先(エリア)',
    uid: 'loadingDestArea',
    sortable: true,
  },
  { name: '積込先(都道府県)', uid: 'destinationPrefecture', sortable: true },
  { name: '積込先(市区町村)', uid: 'destinationCity', sortable: true },
  { name: '積込アポ時間', uid: 'loadingAppointmentTime', sortable: true },
  { name: '荷卸日', uid: 'unloadingDate', sortable: true },
  { name: '荷卸注記', uid: 'unloadingNotes', sortable: true },
  { name: '荷卸先(エリア)', uid: 'unloadingDestArea', sortable: true },
  { name: '荷卸先(都道府県)', uid: 'unloadingDestPrefecture', sortable: true },
  { name: '荷卸先(市区町村)', uid: 'unloadingDestCity', sortable: true },
  { name: '荷卸アポ時間', uid: 'unloadingAppointmentTime', sortable: true },
  { name: '立米', uid: 'cubicMeter', sortable: true },
  { name: '距離', uid: 'distance', sortable: true },
  { name: '小分類', uid: 'subcategory', sortable: true },
  { name: '積込先集約店', uid: 'loadingConsolidationStore', sortable: true },
  { name: '荷卸先集約店', uid: 'unloadingConsolidationStore', sortable: true },
  { name: '荷卸先作業店', uid: 'unloadingShop', sortable: true },
  { name: '受注支店', uid: 'orderBranch', sortable: true },
  { name: '担当支店', uid: 'branchInCharge', sortable: true },
  { name: '備考', uid: 'remarks', sortable: true },
  { name: '売上金額合計', uid: 'totalSales', sortable: true },
  { name: '支払金額合計', uid: 'totalPayment', sortable: true },
  { name: '顧客名', uid: 'regularCustomer', sortable: true },
  { name: '要望車格オプション', uid: 'desiredVehicle', sortable: true },
  { name: '車格', uid: 'vehicleSize', sortable: true },
  { name: 'コースID', uid: 'courseId', sortable: true },
  { name: '依頼先', uid: 'requestedBy', sortable: true },
  { name: '実走会社', uid: 'actualCompany', sortable: true },
  { name: '車番', uid: 'carNumber', sortable: true },
  { name: 'ドライバー', uid: 'driver', sortable: true },
  { name: 'ドライバー連絡先', uid: 'driverContactInfo', sortable: true },
  { name: '積込先作業店', uid: 'loadingDestConference', sortable: true },
  { name: '請求支店', uid: 'billingBranch', sortable: true },
];

const orders = [
  {
    order: '0000000001',
    status: ORDER_STATUS.COMPLETE,
    courseAllocation: COURSE_ALLOCATION.NOT_ASSIGNED,
    receptionNumber: '7708-342491-01-1',
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingNotes: '近畿',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    destinationCity: '10:00',
    loadingAppointmentTime: '23/08/20 (日)',
    unloadingDate: '23/08/20 (日)',
    unloadingNotes: '長崎県',
    unloadingDestArea: '佐世保市',
    unloadingDestPrefecture: '佐世保市',
    unloadingDestCity: '佐世保市',
    unloadingAppointmentTime: '12:00',
    cubicMeter: '7',
    distance: '60km',
    subcategory: '004：幹線',
    loadingConsolidationStore: '福岡集約センター',
    unloadingConsolidationStore: '福岡集約センター',
    unloadingShop: '大阪支店',
    orderBranch: '11:00ごろ作業完了予定。',
    branchInCharge: '¥10,000',
    remarks: '10t',
    totalSales: '05100000001',
    totalPayment: '-',
    regularCustomer: '-',
    desiredVehicle: '1001',
    vehicleSize: '田中　宏',
    courseId: '080-9229-9329',
    requestedBy: 'アート京都北支店',
    actualCompany: '大阪支店',
    carNumber: '大阪支店',
    driver: '大阪支店',
    driverContactInfo: '',
    loadingDestConference: 'アート京都北支店',
    billingBranch: '大阪支店',
  },
  {
    order: '0000000002',
    status: ORDER_STATUS.COMPLETE,
    courseAllocation: COURSE_ALLOCATION.ALLOCATED,
    receptionNumber: '7708-342491-01-1',
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingNotes: '近畿',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    destinationCity: '10:00',
    loadingAppointmentTime: '23/08/20 (日)',
    unloadingDate: '23/08/20 (日)',
    unloadingNotes: '長崎県',
    unloadingDestArea: '佐世保市',
    unloadingDestPrefecture: '佐世保市',
    unloadingDestCity: '佐世保市',
    unloadingAppointmentTime: '12:00',
    cubicMeter: '5',
    distance: '7km',
    subcategory: '004：幹線',
    loadingConsolidationStore: '福岡集約センター',
    unloadingConsolidationStore: '福岡集約センター',
    unloadingShop: '大阪支店',
    orderBranch: '11:00ごろ作業完了予定。',
    branchInCharge: '¥10,000',
    remarks: '5t',
    totalSales: '05100000001',
    totalPayment: '-',
    regularCustomer: '-',
    desiredVehicle: '1001',
    vehicleSize: '田中　宏',
    courseId: '080-9229-9329',
    requestedBy: 'アート京都北支店',
    actualCompany: '大阪支店',
    carNumber: '大阪支店',
    driver: '大阪支店',
    driverContactInfo: '',
    loadingDestConference: 'アート京都北支店',
    billingBranch: '大阪支店',
  },
  {
    order: '0000000003',
    status: ORDER_STATUS.WAITING_LIST,
    courseAllocation: COURSE_ALLOCATION.CONFIRMED,
    receptionNumber: '7708-342491-01-1',
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingNotes: '近畿',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    destinationCity: '10:00',
    loadingAppointmentTime: '23/08/20 (日)',
    unloadingDate: '23/08/20 (日)',
    unloadingNotes: '長崎県',
    unloadingDestArea: '佐世保市',
    unloadingDestPrefecture: '佐世保市',
    unloadingDestCity: '佐世保市',
    unloadingAppointmentTime: '12:00',
    cubicMeter: '10',
    distance: '700km',
    subcategory: '004：幹線',
    loadingConsolidationStore: '福岡集約センター',
    unloadingConsolidationStore: '福岡集約センター',
    unloadingShop: '大阪支店',
    orderBranch: '11:00ごろ作業完了予定。',
    branchInCharge: '¥10,000',
    remarks: '200t',
    totalSales: '05100000001',
    totalPayment: '-',
    regularCustomer: '-',
    desiredVehicle: '1001',
    vehicleSize: '田中　宏',
    courseId: '080-9229-9329',
    requestedBy: 'アート京都北支店',
    actualCompany: '大阪支店',
    carNumber: '大阪支店',
    driver: '大阪支店',
    driverContactInfo: '',
    loadingDestConference: 'アート京都北支店',
    billingBranch: '大阪支店',
  },
  {
    order: '0000000004',
    status: ORDER_STATUS.INCOMPLETE,
    courseAllocation: COURSE_ALLOCATION.NOT_ASSIGNED,
    receptionNumber: '7708-342491-01-1',
    generalCustomer: 'アート京都北支店',
    loadingDate: '23/08/20 (日)',
    loadingNotes: '近畿',
    loadingDestArea: '京都府',
    destinationPrefecture: '長岡京市',
    destinationCity: '10:00',
    loadingAppointmentTime: '23/08/20 (日)',
    unloadingDate: '23/08/20 (日)',
    unloadingNotes: '長崎県',
    unloadingDestArea: '佐世保市',
    unloadingDestPrefecture: '佐世保市',
    unloadingDestCity: '佐世保市',
    unloadingAppointmentTime: '12:00',
    cubicMeter: '10',
    distance: '10km',
    subcategory: '004：幹線',
    loadingConsolidationStore: '福岡集約センター',
    unloadingConsolidationStore: '福岡集約センター',
    unloadingShop: '大阪支店',
    orderBranch: '11:00ごろ作業完了予定。',
    branchInCharge: '¥10,000',
    remarks: '6t',
    totalSales: '510,000',
    totalPayment: '-',
    regularCustomer: '-',
    desiredVehicle: '1001',
    vehicleSize: '田中　宏',
    courseId: '080-9229-9329',
    requestedBy: 'アート京都北支店',
    actualCompany: '大阪支店',
    carNumber: '大阪支店',
    driver: '大阪支店',
    driverContactInfo: '',
    loadingDestConference: 'アート京都北支店',
    billingBranch: '大阪支店',
  },
];

type Order = (typeof orders)[0];

export default function TableOrderListMoving() {
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
            {order.loadingDate} <Calendar />
          </span>
        );
      case 'unloadingDate':
        return (
          <span className='flex min-w-[150px] items-center gap-1'>
            {order.unloadingDate} <Calendar />
          </span>
        );
      case 'order':
        return <span className='text-primary'>{order.order}</span>;
      case 'cubicMeter':
        return (
          <span className='flex items-center justify-end gap-2'>
            {order.cubicMeter} <PencilEdit />
          </span>
        );
      case 'distance':
        return (
          <span className='flex items-center justify-end gap-2'>
            {order.distance} <PencilEdit />
          </span>
        );
      case 'remarks':
        return (
          <span className='flex items-center justify-end gap-2'>
            {order.remarks} <PencilEdit />
          </span>
        );
      case 'unloadingShop':
        return (
          <div className='flex items-center gap-2'>
            <span className='max-w-[120px] truncate'>
              {order.unloadingShop}
            </span>
            <ArrowDown />
          </div>
        );
      case 'billingBranch':
        return (
          <div className='flex items-center gap-2'>
            <span className='max-w-[120px] truncate'>
              {order.billingBranch}
            </span>
            <ArrowDown />
          </div>
        );
      case 'loadingDestConference':
        return (
          <div className='flex items-center gap-2'>
            <span className='max-w-[120px] truncate'>
              {order.loadingDestConference}
            </span>
            <ArrowDown />
          </div>
        );
      case 'orderBranch':
        return (
          <span className='flex items-center gap-2'>
            {order.orderBranch} <ArrowDown />
          </span>
        );
      case 'branchInCharge':
        return (
          <span className='flex items-center gap-2'>
            {order.branchInCharge} <ArrowDown />
          </span>
        );
      case 'loadingConsolidationStore':
        return (
          <span className='flex items-center gap-2'>
            {order.loadingConsolidationStore} <ArrowDown />
          </span>
        );
      case 'unloadingConsolidationStore':
        return (
          <span className='flex items-center gap-2'>
            {order.unloadingConsolidationStore} <ArrowDown />
          </span>
        );
      default:
        return <span>{cellValue}</span>;
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

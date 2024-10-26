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
import { ArrowSort } from '../svg';
import LinkRedirect from '../common/LinkRedirect';

const columns = [
  { name: '受注マスタID', uid: 'orderMasterId', sortable: true },
  { name: '得意先名 ', uid: 'generalName', sortable: true },
  { name: '受注担当者', uid: 'orderTaker', sortable: true },
  { name: '依頼先', uid: 'requestedBY', sortable: true },
  { name: '積込先（エリア）', uid: 'loadingDestination', sortable: true },
  { name: '積込先(都道府県）', uid: 'destination', sortable: true },
  { name: '積込先(市区町村）', uid: 'destinationCity', sortable: true },
  {
    name: '荷卸先(エリア）',
    uid: 'unloadingDestArea',
    sortable: true,
  },
  { name: '荷卸先(都道府県）', uid: 'unloadingDestPrefecture', sortable: true },
  { name: '荷卸先(市区町村）', uid: 'unloadingDestCity', sortable: true },
  { name: '開始日', uid: 'startDate', sortable: true },
  { name: '終了日', uid: 'endDate', sortable: true },
  { name: '売上金額合計', uid: 'totalSales', sortable: true },
  { name: '備考', uid: 'remarks', sortable: true },
  { name: '要望車格オプション', uid: 'desiredVehicle', sortable: true },
  { name: '荷姿', uid: 'packaging', sortable: true },
  { name: '数量', uid: 'quantity', sortable: true },
  { name: '担当支店', uid: 'branchInCharge', sortable: true },
  { name: '受注支店', uid: 'orderBranch', sortable: true },
];

const orders = [
  {
    orderMasterId: '00001',
    generalName: '㈱ﾅｶﾉ商会尼崎TC①',
    orderTaker: '佐藤　二郎',
    requestedBY: '-',
    loadingDestination: '近畿',
    destination: '京都府',
    destinationCity: '長岡京市',
    unloadingDestArea: '九州',
    unloadingDestPrefecture: '長崎県',
    unloadingDestCity: '長岡京市',
    startDate: '23/08/20 (木)',
    endDate: '23/10/2 (木)',
    totalSales: '¥80,000',
    remarks: '',
    desiredVehicle: '4tゲート',
    packaging: 'ケース',
    quantity: '20',
    branchInCharge: '大阪支店',
    orderBranch: '輸送ネット',
  },
  {
    orderMasterId: '00002',
    generalName: '㈱ﾅｶﾉ商会尼崎TC①',
    orderTaker: '佐藤　二郎',
    requestedBY: '-',
    loadingDestination: '近畿',
    destination: '京都府',
    destinationCity: '長岡京市',
    unloadingDestArea: '九州',
    unloadingDestPrefecture: '長崎県',
    unloadingDestCity: '長岡京市',
    startDate: '23/08/20 (木)',
    endDate: '23/10/2 (木)',
    totalSales: '¥80,000',
    remarks: '',
    desiredVehicle: '4tゲート',
    packaging: 'ケース',
    quantity: '10',
    branchInCharge: '大阪支店',
    orderBranch: '輸送ネット',
  },
  {
    orderMasterId: '00003',
    generalName: '㈱ﾅｶﾉ商会尼崎TC①',
    orderTaker: '佐藤　二郎',
    requestedBY: '-',
    loadingDestination: '近畿',
    destination: '京都府',
    destinationCity: '長岡京市',
    unloadingDestArea: '九州',
    unloadingDestPrefecture: '長崎県',
    unloadingDestCity: '長岡京市',
    startDate: '23/08/20 (木)',
    endDate: '23/10/2 (木)',
    totalSales: '¥90,000',
    remarks: '',
    desiredVehicle: '4tゲート',
    packaging: 'ケース',
    quantity: '10',
    branchInCharge: '大阪支店',
    orderBranch: '輸送ネット',
  },
  {
    orderMasterId: '00003',
    generalName: '㈱ﾅｶﾉ商会尼崎TC①',
    orderTaker: '佐藤　二郎',
    requestedBY: '-',
    loadingDestination: '近畿',
    destination: '京都府',
    destinationCity: '長岡京市',
    unloadingDestArea: '九州',
    unloadingDestPrefecture: '長崎県',
    unloadingDestCity: '長岡京市',
    startDate: '23/08/20 (木)',
    endDate: '23/10/2 (木)',
    totalSales: '¥90,000',
    remarks: '',
    desiredVehicle: '4tゲート',
    packaging: 'ケース',
    quantity: '10',
    branchInCharge: '大阪支店',
    orderBranch: '輸送ネット',
  },
  {
    orderMasterId: '00003',
    generalName: '㈱ﾅｶﾉ商会尼崎TC①',
    orderTaker: '佐藤　二郎',
    requestedBY: '-',
    loadingDestination: '近畿',
    destination: '京都府',
    destinationCity: '長岡京市',
    unloadingDestArea: '九州',
    unloadingDestPrefecture: '長崎県',
    unloadingDestCity: '長岡京市',
    startDate: '23/08/20 (木)',
    endDate: '23/10/2 (木)',
    totalSales: '¥90,000',
    remarks: '',
    desiredVehicle: '4tゲート',
    packaging: 'ケース',
    quantity: '10',
    branchInCharge: '大阪支店',
    orderBranch: '輸送ネット',
  },
];

type Order = (typeof orders)[0];

export default function TableOrderListGeneral() {
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
      case 'orderMasterId':
        return (
          <LinkRedirect
            href={`/order/master/${order.orderMasterId}/detail`}
            className='text-primary underline-offset-2 hover:underline'
          >
            {order.orderMasterId}
          </LinkRedirect>
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
          <TableRow key={item.orderMasterId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

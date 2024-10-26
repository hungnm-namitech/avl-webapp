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
  Button,
} from '@nextui-org/react';
import { ArrowSort, Calendar, PencilEdit, RedBin } from '../svg';
import DeliveryStatus from '../common/DeliveryStatus';
import { detailCourseMixed } from '../../constants/course.cont';

const columns = [
  { name: '受注番号', uid: 'orderId', sortable: true },
  { name: 'ステータス ', uid: 'status', sortable: true },
  { name: '顧客名', uid: 'regularName', sortable: true },
  { name: '得意先名', uid: 'generalName', sortable: true },
  { name: '立米', uid: 'cubic', sortable: true },
  { name: '荷姿', uid: 'packaging', sortable: true },
  { name: '数量', uid: 'quantity', sortable: true },
  { name: '積込先集約店', uid: 'loadingConsolidationStore', sortable: true },
  { name: '積込先作業店', uid: 'loadingDestConference', sortable: true },
  { name: '積込先名称', uid: 'destinationName', sortable: true },
  { name: '積込日', uid: 'loadingDate', sortable: true },
  { name: '積込アポ時間', uid: 'loadingAppointmentTime', sortable: true },
  { name: '積込注記', uid: 'loadingNotes', sortable: true },
  { name: '積込先(都道府県)', uid: 'destinationPrefecture', sortable: true },
  { name: '積込先(市区町村)', uid: 'destinationCity', sortable: true },
  { name: '荷卸先集約店', uid: 'unloadingConsolidationStore', sortable: true },
  { name: '荷卸先作業店', uid: 'unloadingShop', sortable: true },
  { name: '荷卸先名称', uid: 'unloadingDestName', sortable: true },
  { name: '荷卸日', uid: 'unloadingDate', sortable: true },
  { name: '荷卸注記', uid: 'unloadingNotes', sortable: true },
  { name: '荷卸アポ時間', uid: 'unloadingAppointmentTime', sortable: true },
  { name: '荷卸先(都道府県)', uid: 'unloadingDestPrefecture', sortable: true },
  { name: '荷卸先(市区町村)', uid: 'unloadingDestCity', sortable: true },
  { name: '積込時間', uid: 'loadingTime', sortable: true },
  { name: '荷卸時間', uid: 'unloadingTime', sortable: true },
];

type Course = (typeof detailCourseMixed)[0];

export default function TableDetailCourseMixed() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'order',
    direction: 'ascending',
  });
  const sortedItems = React.useMemo(() => {
    return detailCourseMixed.sort((a: Course, b: Course) => {
      const first = a[sortDescriptor.column as keyof Course];
      const second = b[sortDescriptor.column as keyof Course];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor]);

  const classNames = React.useMemo(
    () => ({
      base: 'max-w-content-screen-table overflow-x-auto overflow-y-clip border-r-4 border-r-white]',
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
        'first:before:rounded-none',
        'last:before:rounded-none',
        'group-data-[odd=true]:before:bg-color-gray',
        'group-data-[selected=true]:before:bg-color-checked',
        'py-0 px-3 first:pl-3 max-w-40 truncate whitespace-nowrap',
      ],
      sortIcon: 'hidden',
    }),
    []
  );

  const renderCell = useCallback((course: Course, columnKey: Key) => {
    const cellValue = course[columnKey as keyof Course];
    switch (columnKey) {
      case 'status':
        return <DeliveryStatus status={course.status} type='ORDER' />;
      case 'orderId':
        return <span className='text-primary'>{course.orderId}</span>;
      case 'unloadingDestName':
        return (
          <Tooltip
            content={course.unloadingDestName}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>{course.unloadingDestName}</span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'unloadingConsolidationStore':
        return (
          <Tooltip
            content={course.unloadingConsolidationStore}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>
                {course.unloadingConsolidationStore}
              </span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'loadingConsolidationStore':
        return (
          <Tooltip
            content={course.loadingConsolidationStore}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>
                {course.loadingConsolidationStore}
              </span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'loadingDestConference':
        return (
          <Tooltip
            content={course.loadingDestConference}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>{course.loadingDestConference}</span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'unloadingShop':
        return (
          <Tooltip
            content={course.unloadingShop}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>{course.unloadingShop}</span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'destinationName':
        return (
          <Tooltip
            content={course.destinationName}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center justify-end gap-2'>
              <span className='truncate'>{course.destinationName}</span>
              <PencilEdit />
            </div>
          </Tooltip>
        );
      case 'loadingDate':
        return (
          <div className='flex w-[130px] items-center gap-2'>
            <span>{course.loadingDate}</span>
            <Calendar />
          </div>
        );
      case 'unloadingDate':
        return (
          <div className='flex w-[130px] items-center gap-2'>
            <span>{course.unloadingDate}</span>
            <Calendar />
          </div>
        );
      default:
        return <span className='truncate'>{cellValue}</span>;
    }
  }, []);
  return (
    <div className='relative'>
      <Table
        isStriped
        removeWrapper
        className='order-list'
        checkboxesProps={{
          classNames: {
            wrapper:
              'before:border-2 before:border-color-border before:rounded-[2px] before:w-4 before:h-4 w-4 h-4 after:rounded-[2px] before:bg-white',
          },
          radius: 'none',
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column: { name: string; uid: string; sortable: boolean }) => (
            <TableColumn key={column.uid} allowsSorting={column.sortable}>
              <div className='flex items-center gap-2'>
                <span>{column.name}</span>
                <ArrowSort />
              </div>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'No orders found'} items={sortedItems}>
          {(item) => (
            <TableRow key={item.orderId}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='absolute right-[-50px] top-0'>
        <div className='h-[35px] w-[50px] border-b-2 border-b-primary bg-secondary pc:left-[891px]'></div>
        {sortedItems.map((item) => (
          <Button
            key={item.orderId}
            isIconOnly
            radius='none'
            className='flex h-[32px] w-[50px] items-center justify-center border-b-1 border-color-2rd-border bg-transparent odd:bg-color-gray'
            onClick={() => console.log(item.orderId)}
          >
            {<RedBin />}
          </Button>
        ))}
      </div>
    </div>
  );
}

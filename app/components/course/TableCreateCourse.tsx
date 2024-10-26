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
import { ArrowSort, Car, Home, PencilEdit } from '../svg';
import { COURSE_TYPE, courses } from '../../constants/course.cont';

const columns = [
  { name: '受注番号', uid: 'order', sortable: true },
  { name: 'コースID ', uid: 'groupId', sortable: true },
  { name: '種別', uid: 'type', sortable: true },
  { name: '積込日', uid: 'loadingDate', sortable: true },
  { name: '積込時間', uid: 'loadingTime', sortable: true },
  { name: '荷卸日', uid: 'unloadingDate', sortable: true },
  { name: '荷卸時間', uid: 'unloadingTime', sortable: true },
  { name: '荷卸先(都道府県)', uid: 'unloadingDestPrefecture', sortable: true },
  { name: '荷卸先(市区町村)', uid: 'unloadingDestCity', sortable: true },
  {
    name: '要望車格オプション',
    uid: 'desiredVehicle',
    sortable: true,
  },
  { name: '荷姿', uid: 'packaging', sortable: true },
  { name: '数量', uid: 'quantity', sortable: true },
  { name: '立米', uid: 'cubicMeter', sortable: true },
  { name: '積込注記', uid: 'loadingNotes', sortable: true },
  { name: '荷卸注記', uid: 'unloadingNotes', sortable: true },
  { name: '積込先集約店', uid: 'loadingConsolidatedStore', sortable: true },
  { name: '荷卸先集約店', uid: 'unloadingConsolidatedStore', sortable: true },
  { name: '積込先集約店', uid: 'loadingDestConference', sortable: true },
  { name: '荷卸先作業店', uid: 'unloadingShop', sortable: true },
  { name: '売上金額合計', uid: 'totalSales', sortable: true },
  { name: '備考', uid: 'remarks', sortable: true },
];

type Course = (typeof courses)[0];

export default function TableCreateCourse() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'order',
    direction: 'ascending',
  });
  const sortedItems = React.useMemo(() => {
    return courses.sort((a: Course, b: Course) => {
      const first = a[sortDescriptor.column as keyof Course];
      const second = b[sortDescriptor.column as keyof Course];
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
        'h-[34px] data-[hover=true]:text-color-base',
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

  const renderCell = useCallback((course: Course, columnKey: Key) => {
    const cellValue = course[columnKey as keyof Course];
    switch (columnKey) {
      case 'order':
        return <span className='text-primary'>{course.order}</span>;
      case 'groupId':
        return (
          <div className='flex gap-2'>
            <span>{course.groupId}</span>
            <PencilEdit />
          </div>
        );
      case 'cubicMeter':
        return (
          <div className='flex justify-end'>
            <span>{course.cubicMeter}</span>
          </div>
        );
      case 'quantity':
        return (
          <div className='flex justify-end'>
            <span>{course.quantity}</span>
          </div>
        );
      case 'totalSales':
        return <div className='text-end'>¥{course.totalSales}</div>;
      case 'type':
        return (
          <div className='flex h-[22px] w-[76px] items-center justify-center gap-1 rounded-sm border border-color-border bg-color-gray'>
            {course.type === COURSE_TYPE.MOVING ? <Home /> : <Car />}

            <span className='text-[11px] font-bold leading-[11px] text-color-selected'>
              引越
            </span>
          </div>
        );
      default:
        return <span>{cellValue}</span>;
    }
  }, []);

  const renderCellHead = useCallback((cellName: string, uid: string) => {
    switch (uid) {
      case 'unloadingDestPrefecture':
      case 'unloadingDestCity':
        return (
          <Tooltip
            content={cellName}
            placement='bottom-start'
            size='sm'
            classNames={{
              content: 'text-white bg-black text-sm leading-[17.4px] rounded',
            }}
          >
            <div className='flex items-center gap-2'>
              <span className='max-w-[90px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );

      default:
        return (
          <div className='flex items-center gap-2'>
            <span className='truncate'>{cellName}</span>
            <ArrowSort />
          </div>
        );
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
            {renderCellHead(column.name, column.uid)}
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

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
  Chip,
} from '@nextui-org/react';
import { ArrowDown, ArrowSort, Car, Home, PencilEdit, Warning } from '../svg';
import {
  COURSE_TYPE,
  courseList,
  LINK_TO_SSCV,
} from '@/app/constants/course.cont';
import CourseStatus from '../CourseStatus';
const columns = [
  { name: 'グループID', uid: 'groupId', sortable: true },
  { name: '種別', uid: 'type', sortable: true },
  { name: 'ステータス', uid: 'status', sortable: true },
  { name: 'SSCV連携', uid: 'sscvLink', sortable: true },
  { name: '積込日', uid: 'loadingDate', sortable: true },
  { name: '1本目積込時間', uid: 'firstLoadingTime', sortable: true },
  { name: '荷卸日', uid: 'unloadingDate', sortable: true },
  { name: '1本目荷卸時間', uid: 'firstUnloadingTime', sortable: true },
  { name: '発地(エリア)', uid: 'departurePlaceArea', sortable: true },
  { name: '発地(都道府県)', uid: 'departurePlacePrefecture', sortable: true },
  { name: '発地(市区町村)', uid: 'departurePlaceCity', sortable: true },
  { name: '着地(エリア)', uid: 'landingArea', sortable: true },
  { name: '着地(都道府県)', uid: 'landingPrefecture', sortable: true },
  { name: '着地(市区町村)', uid: 'destinationCity', sortable: true },
  { name: '受注数', uid: 'orderQuantity', sortable: true },
  { name: '数量(一般)', uid: 'quantity', sortable: true },
  { name: '合算立米(引越)', uid: 'cubic', sortable: true },
  { name: '要望車格', uid: 'desiredVehicleSize', sortable: true },
  { name: '要望車格オプション', uid: 'desiredVehicleClass', sortable: true },
  { name: '車格', uid: 'vehicleSize', sortable: true },
  { name: '車番', uid: 'carNumber', sortable: true },
  { name: '依頼先', uid: 'requestBy', sortable: true },
  { name: '実走会社', uid: 'actualCompany', sortable: true },
  { name: 'ドライバー', uid: 'driver', sortable: true },
  { name: '支払運賃合計', uid: 'totalFarePaid', sortable: true },
  { name: '支払運賃', uid: 'paymentFare', sortable: true },
  { name: '高速代', uid: 'expresswayFee', sortable: true },
  { name: '備考', uid: 'remarks', sortable: true },
  { name: 'コースID', uid: 'courseId', sortable: true },
  { name: '担当支店', uid: 'branchInChange', sortable: true },
];

type Course = (typeof courseList)[0];

export default function TableCourseList() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'order',
    direction: 'ascending',
  });
  const sortedItems = React.useMemo(() => {
    return courseList.sort((a: Course, b: Course) => {
      const first = a[sortDescriptor.column as keyof Course];
      const second = b[sortDescriptor.column as keyof Course];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === 'descending' ? -cmp : cmp;
    });
  }, [sortDescriptor]);

  const classNames = React.useMemo(
    () => ({
      tr: 'border-b border-color-2rd-border last:border-none h-[32px] ',
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
      case 'groupId':
        return (
          <div className='flex items-center gap-2'>
            <span>{course.groupId}</span>
            {course.status === 1 && <Warning />}
          </div>
        );
      case 'actualCompany':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>{course.actualCompany}</span>
            <PencilEdit />
          </div>
        );
      case 'orderQuantity':
        return <div className='w-full text-end'>{course.orderQuantity}</div>;
      case 'quantity':
        return <div className='w-full text-end'>{course.quantity}</div>;
      case 'cubic':
        return <div className='w-full text-end'>{course.cubic}</div>;
      case 'driver':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>{course.driver}</span>
            <PencilEdit />
          </div>
        );
      case 'totalFarePaid':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>¥{course.totalFarePaid}</span>
            <PencilEdit />
          </div>
        );
      case 'paymentFare':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>¥{course.paymentFare}</span>
          </div>
        );
      case 'expresswayFee':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>¥{course.expresswayFee}</span>
            <PencilEdit />
          </div>
        );
      case 'remarks':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span className='flex-1 text-start'>{course.remarks}</span>
            <PencilEdit />
          </div>
        );
      case 'requestBy':
        return (
          <div className='flex items-center justify-end gap-2'>
            <span>{course.requestBy}</span>
            <div className='text-primary'>
              <ArrowDown />
            </div>
          </div>
        );
      case 'type':
        return (
          <div className='flex h-[22px] w-[76px] items-center justify-center gap-1 rounded-sm border border-color-border bg-color-gray'>
            {course.type === COURSE_TYPE.MOVING ? <Home /> : <Car />}
            <span className='text-[11px] font-bold leading-[11px] text-color-selected'>
              引越
            </span>
          </div>
        );
      case 'status':
        return <CourseStatus status={course.status} />;
      case 'sscvLink':
        return (
          <Chip
            radius='none'
            classNames={{
              base: 'bg-transparent',
              content: [
                'flex items-center justify-center h-[22px] w-[76px] rounded-[2px]',
                'border border-color-error bg-error text-[11px] font-bold leading-[11px] text-color-error',
                `${course.sscvLink === LINK_TO_SSCV.NOT_LINKED && 'border-color-selected text-color-selected bg-secondary'}`,
              ],
            }}
          >
            {course.sscvLink === LINK_TO_SSCV.LINK ? '連携済' : '未連携'}
          </Chip>
        );
      default:
        return <span>{cellValue}</span>;
    }
  }, []);

  const renderCellHead = useCallback((cellName: string, uid: string) => {
    switch (uid) {
      case 'firstLoadingTime':
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
              <span className='max-w-[70px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'firstUnloadingTime':
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
              <span className='max-w-[70px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'departurePlacePrefecture':
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
              <span className='max-w-[75px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'departurePlaceCity':
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
              <span className='max-w-[75px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'landingPrefecture':
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
              <span className='max-w-[75px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'destinationCity':
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
              <span className='max-w-[75px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      case 'cubic':
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
      case 'totalFarePaid':
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
              <span className='max-w-[75px] truncate'>{cellName}</span>
              <ArrowSort />
            </div>
          </Tooltip>
        );
      default:
        return (
          <div className='flex items-center gap-2'>
            <span className='truncate'>{cellName}</span> <ArrowSort />
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
          <TableRow key={item.courseId}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

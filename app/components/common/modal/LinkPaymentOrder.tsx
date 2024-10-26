'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import React, { Fragment, Key, useCallback, useEffect, useState } from 'react';
import { ArrowSort, Plus } from '../../svg';
import { detailCourseMixed } from '@/app/constants/course.cont';
import DeliveryStatus from '../DeliveryStatus';
import PencilETable from '../../svg/common/PencilTable';
import CalendarTable from '../../svg/common/CalendarTable';

type Course = (typeof detailCourseMixed)[0];

interface LinkPaymentOrderProps {
  type?: string;
}

/**
 *
 * @component SRV0108
 */
export default function LinkPaymentOrder(props: LinkPaymentOrderProps) {
  const { type } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [columns, setColumns] = useState([] as any[]);

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
      base: 'max-w-[893px] overflow-x-auto overflow-y-clip border-r-4 border-r-white pc:max-w-[1000px]',
      tr: 'border-b border-color-2rd-border last:border-none h-[32px]',
      th: [
        'bg-secondary',
        'text-color-base',
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
        'text-sm font-normal leading-[17.5px]',
      ],
      sortIcon: 'hidden',
    }),
    []
  );

  const renderCell = useCallback((course: Course, columnKey: Key) => {
    const cellValue = course[columnKey as keyof Course];
    switch (columnKey) {
      case 'status':
        return <DeliveryStatus status={2} type='CHOICE' />;
      case 'orderId':
        return <span className=''>{course.orderId}</span>;
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>{course.unloadingDestName}</span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>
                {course.unloadingConsolidationStore}
              </span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>
                {course.loadingConsolidationStore}
              </span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>{course.loadingDestConference}</span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>{course.unloadingShop}</span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
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
            <div className='flex items-center justify-between gap-2'>
              <span className='truncate'>{course.destinationName}</span>
              <div className='text-placeholder'>
                <PencilETable />
              </div>
            </div>
          </Tooltip>
        );
      case 'loadingDate':
        return (
          <div className='flex w-[130px] items-center gap-2'>
            <span>{course.loadingDate}</span>
            <div className='text-placeholder'>
              <CalendarTable />
            </div>
          </div>
        );
      case 'unloadingDate':
        return (
          <div className='flex w-[130px] items-center gap-2'>
            <span>{course.unloadingDate}</span>
            <div className='text-placeholder'>
              <CalendarTable />
            </div>
          </div>
        );
      default:
        return <span className='truncate'>{cellValue}</span>;
    }
  }, []);

  useEffect(() => {
    switch (type) {
      case 'mixed':
        setColumns([
          { name: '', uid: 'status', sortable: false },
          { name: '受注番号', uid: 'orderId', sortable: true },
          { name: '顧客名', uid: 'regularName', sortable: true },
          { name: '得意先名', uid: 'generalName', sortable: true },
          { name: '立米', uid: 'cubic', sortable: true },
          { name: '荷姿', uid: 'packaging', sortable: true },
          { name: '数量', uid: 'quantity', sortable: true },
          {
            name: '積込先集約店',
            uid: 'loadingConsolidationStore',
            sortable: true,
          },
          {
            name: '積込先作業店',
            uid: 'loadingDestConference',
            sortable: true,
          },
          { name: '積込先名称', uid: 'destinationName', sortable: true },
          { name: '積込日', uid: 'loadingDate', sortable: true },
          {
            name: '積込アポ時間',
            uid: 'loadingAppointmentTime',
            sortable: true,
          },
          { name: '積込注記', uid: 'loadingNotes', sortable: true },
          {
            name: '積込先(都道府県)',
            uid: 'destinationPrefecture',
            sortable: true,
          },
          { name: '積込先(市区町村)', uid: 'destinationCity', sortable: true },
          {
            name: '荷卸先集約店',
            uid: 'unloadingConsolidationStore',
            sortable: true,
          },
          { name: '荷卸先作業店', uid: 'unloadingShop', sortable: true },
          { name: '荷卸先名称', uid: 'unloadingDestName', sortable: true },
          { name: '荷卸日', uid: 'unloadingDate', sortable: true },
          { name: '荷卸注記', uid: 'unloadingNotes', sortable: true },
          {
            name: '荷卸アポ時間',
            uid: 'unloadingAppointmentTime',
            sortable: true,
          },
          {
            name: '荷卸先(都道府県)',
            uid: 'unloadingDestPrefecture',
            sortable: true,
          },
          {
            name: '荷卸先(市区町村)',
            uid: 'unloadingDestCity',
            sortable: true,
          },
          { name: '積込時間', uid: 'loadingTime', sortable: true },
          { name: '荷卸時間', uid: 'unloadingTime', sortable: true },
        ]);
        break;

      case 'moving':
        setColumns([
          { name: '', uid: 'status', sortable: false },
          { name: '受注番号', uid: 'orderId', sortable: true },
          { name: '顧客名', uid: 'regularName', sortable: true },
          { name: '立米', uid: 'cubic', sortable: true },
          {
            name: '積込先集約店',
            uid: 'loadingConsolidationStore',
            sortable: true,
          },
          {
            name: '積込先作業店',
            uid: 'loadingDestConference',
            sortable: true,
          },
          { name: '積込日', uid: 'loadingDate', sortable: true },
          {
            name: '積込アポ時間',
            uid: 'loadingAppointmentTime',
            sortable: true,
          },
          { name: '積込注記', uid: 'loadingNotes', sortable: true },
          {
            name: '積込先(都道府県)',
            uid: 'destinationPrefecture',
            sortable: true,
          },
          { name: '積込先(市区町村)', uid: 'destinationCity', sortable: true },
          {
            name: '荷卸先集約店',
            uid: 'unloadingConsolidationStore',
            sortable: true,
          },
          { name: '荷卸先作業店', uid: 'unloadingShop', sortable: true },
          { name: '荷卸日', uid: 'unloadingDate', sortable: true },
          { name: '荷卸注記', uid: 'unloadingNotes', sortable: true },
          {
            name: '荷卸アポ時間',
            uid: 'unloadingAppointmentTime',
            sortable: true,
          },
          {
            name: '荷卸先(都道府県)',
            uid: 'unloadingDestPrefecture',
            sortable: true,
          },
          {
            name: '荷卸先(市区町村)',
            uid: 'unloadingDestCity',
            sortable: true,
          },
        ]);
        break;

      default:
        setColumns([
          { name: '', uid: 'status', sortable: false },
          { name: '受注番号', uid: 'orderId', sortable: true },
          { name: '得意先名', uid: 'generalName', sortable: true },
          { name: '荷姿', uid: 'packaging', sortable: true },
          { name: '数量', uid: 'quantity', sortable: true },
          { name: '積込日', uid: 'loadingDate', sortable: true },
          { name: '積込時間', uid: 'loadingTime', sortable: true },
          { name: '積込先名称', uid: 'destinationName', sortable: true },
          {
            name: '積込先(都道府県)',
            uid: 'destinationPrefecture',
            sortable: true,
          },
          { name: '積込先(市区町村)', uid: 'destinationCity', sortable: true },
          { name: '荷卸日', uid: 'unloadingDate', sortable: true },
          { name: '荷卸先名称', uid: 'unloadingDestName', sortable: true },
          {
            name: '荷卸先(都道府県)',
            uid: 'unloadingDestPrefecture',
            sortable: true,
          },
          {
            name: '荷卸先(市区町村)',
            uid: 'unloadingDestCity',
            sortable: true,
          },
          { name: '荷卸時間', uid: 'unloadingTime', sortable: true },
        ]);
        break;
    }
  }, [type, isOpen]);

  return (
    <Fragment>
      <Button
        disableRipple
        variant='bordered'
        startContent={
          <div className='text-primary'>
            <Plus />
          </div>
        }
        className='h-7 border-none'
        radius='sm'
        onClick={onOpen}
      >
        <span className='text-sm font-bold leading-[22px] text-primary'>
          受注紐付
        </span>
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={'5xl'}>
        <ModalContent>
          {() => (
            <>
              <ModalBody className='gap-0 px-14 py-[34px] text-color-base'>
                <div className='mb-[7px] text-2xl font-bold leading-6 text-color-base'>
                  受注を選択
                </div>
                <div className='mb-[28px] text-sm font-normal leading-[21px] text-color-base'>
                  支払いに紐づける受注を選択してください
                </div>
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
                      {(column: {
                        name: string;
                        uid: string;
                        sortable: boolean;
                      }) => (
                        <TableColumn
                          key={column.uid}
                          allowsSorting={column.sortable}
                        >
                          <div className='flex items-center gap-2'>
                            <span>{column.name}</span>
                            {column.sortable && <ArrowSort />}
                          </div>
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody
                      emptyContent={'No orders found'}
                      items={sortedItems}
                    >
                      {(item) => (
                        <TableRow key={item.orderId}>
                          {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
}

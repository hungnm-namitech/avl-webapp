'use client';
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Selection,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import React from 'react';
import PaginationComponent from '../../common/PaginationComponent';
import DeliveryStatus from '../../common/DeliveryStatus';
import { ArrowSort } from '../../svg';
import ArrowSortAsc from '../../svg/common/ArrowSortAsc';
import ArrowSortDesc from '../../svg/common/ArrowSortDesc';

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

type TableOrderLogisticProps = {
  columns: { label: string; id: string; show: boolean; sort: string }[];
  isLoading: boolean;
  data: any[];
  rowsPerPage: number;
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  updateColumns: (
    columns: { id: string; label: string; show: boolean; sort: string }[]
  ) => void;
};

export default function TableOrderLogistic(props: TableOrderLogisticProps) {
  const {
    columns,
    isLoading,
    data,
    rowsPerPage,
    total,
    page,
    setPage,
    updateColumns,
  } = props;

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );

  const headerColumns = React.useMemo(() => {
    return columns.filter((column) => column.show);
  }, [columns]);

  const pages = Math.ceil(total / rowsPerPage);

  const sortColumn = (columnId: string) => {
    const columnClone = columns.map((column) => ({
      ...column,
      sort:
        column.id === columnId ? (column.sort === 'desc' ? 'asc' : 'desc') : '',
    }));

    updateColumns(columnClone);
    setPage(1);
  };

  const renderCell = React.useCallback((order: any, columnKey: React.Key) => {
    const cellValue = order[columnKey as keyof any];

    switch (columnKey) {
      case 'orderNum':
        return (
          <Button
            variant='flat'
            className='h-fit w-fit cursor-pointer bg-transparent p-0 text-primary underline-offset-2 hover:underline'
          >
            {order.orderNum || '-'}
          </Button>
        );
      case 'status':
        return <DeliveryStatus status={order.status} type='ORDER' />;

      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: order.avatar }}
            description={order.email}
            name={cellValue}
          >
            {order.email}
          </User>
        );
      case 'role':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-small capitalize'>{cellValue}</p>
            <p className='text-bold text-tiny capitalize text-default-400'>
              {order.team}
            </p>
          </div>
        );
      case 'status':
        return (
          <Chip
            className='capitalize'
            color={statusColorMap[order.status]}
            size='sm'
            variant='flat'
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className='relative flex items-center justify-end gap-2'>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size='sm' variant='light'>
                  VerticalDotsIcon
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const bottomContent = React.useMemo(() => {
    return (
      !!data.length && (
        <div className='flex items-center justify-between px-2 py-2'>
          <div className='text-sm'>{`${data.length}件表示 / ${total}件中`}</div>

          <PaginationComponent
            page={page}
            total={pages}
            onChangePage={setPage}
          />
        </div>
      )
    );
  }, [data.length, total, page, pages, setPage]);

  return (
    <Table
      isCompact
      aria-label='table order logistic'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      className='px-5'
      classNames={{
        wrapper: 'p-0 rounded-none',
        th: 'bg-secondary !rounded-none text-sm text-color-base font-normal h-[34px] border-b-[2px] border-primary',
        thead: 'z-50 tr:bg-red-500',
        tr: 'last:border-none h-[32px] ',
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
      }}
      selectedKeys={selectedKeys}
      selectionMode='multiple'
      isHeaderSticky
      isStriped
      onSelectionChange={setSelectedKeys}
      checkboxesProps={{
        classNames: {
          wrapper:
            'before:border-2 before:border-color-border before:rounded-[2px] before:w-4 before:h-4 w-4 h-4 after:rounded-[2px] before:bg-white',
        },
        radius: 'none',
      }}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.id}
            align={column.id === 'actions' ? 'center' : 'start'}
          >
            <div
              className='flex cursor-pointer items-center gap-2 hover:opacity-70'
              onClick={() => {
                sortColumn(column.id);
              }}
            >
              <span>{column.label}</span>
              {column.sort.length ? (
                column.sort === 'asc' ? (
                  <ArrowSortAsc />
                ) : (
                  <ArrowSortDesc />
                )
              ) : (
                <ArrowSort />
              )}
            </div>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={data}
        isLoading={isLoading}
        loadingContent={<Spinner aria-label='loading' />}
      >
        {(item) => (
          <TableRow key={item.orderNum}>
            {(columnKey) => (
              <TableCell
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

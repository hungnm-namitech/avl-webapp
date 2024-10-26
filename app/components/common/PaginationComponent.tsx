'use client';

import {
  Button,
  cn,
  Pagination,
  PaginationItemRenderProps,
  PaginationItemType,
} from '@nextui-org/react';
import React from 'react';
import { PaginationArrow, SingleArrow } from '../svg';

type Props = {
  page?: number;
  total?: number;
  onChangePage?: (page: number) => void;
};

const PaginationComponent = (props: Props) => {
  const { page = 1, total = 99, onChangePage } = props;
  const renderItem = ({
    ref,
    onNext,
    onPrevious,
    value,
    key,
    setPage,
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          disabled={page === total}
          key={key}
          className={cn(
            'ml-2 flex h-6 w-6 min-w-6 items-center justify-center rounded border border-color-border bg-transparent text-[11px]',
            page === total && 'bg-color-gray'
          )}
          onClick={onNext}
        >
          <div
            className='rotate-180'
            onClick={() => {
              onChangePage && onChangePage(total);
            }}
          >
            <PaginationArrow color={page === total} />
          </div>
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          disabled={page === 1}
          key={key}
          className={cn(
            'mr-2 flex h-6 w-6 min-w-6 items-center justify-center rounded border border-color-border bg-transparent text-[11px]',
            page === 1 && 'bg-color-gray'
          )}
          onClick={onPrevious}
        >
          <PaginationArrow color={page === 1} />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className='bg-transparent'>
          ...
        </button>
      );
    }

    return (
      <button
        ref={ref}
        key={key}
        className={cn(
          'h-6 w-6 min-w-6 rounded border border-color-border bg-transparent text-[11px] text-color-selected'
        )}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <div className='flex items-center gap-2'>
      <Button
        disabled={page === 1}
        isIconOnly
        className={cn(
          'h-6 w-6 min-w-6 rounded border border-color-border bg-transparent',
          page === 1 && 'bg-color-gray'
        )}
        onPress={() => onChangePage && onChangePage(1)}
      >
        <SingleArrow color={page === 1} />
      </Button>
      <Pagination
        renderItem={renderItem}
        showControls
        classNames={{
          wrapper: 'gap-2 items-center',
          cursor: 'min-w-6 w-6 h-6 rounded bg-color-selected text-[11px]',
        }}
        total={total}
        page={page}
        onChange={onChangePage}
      />
      <Button
        disabled={page === total}
        isIconOnly
        className={cn(
          'h-6 w-6 min-w-6 rotate-180 rounded border border-color-border bg-transparent',
          page === total && 'bg-color-gray'
        )}
        onPress={() => onChangePage && onChangePage(total)}
      >
        <SingleArrow color={page === total} />
      </Button>
    </div>
  );
};

export default PaginationComponent;

'use client';

import { Button, cn } from '@nextui-org/react';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import { MdOutlineDragIndicator } from 'react-icons/md';
import { CloseEye, OpenEye } from '../svg';
import ButtonComponent from '../common/element/ButtonComponent';

type DropDownShowColumnProps = {
  columns: { id: string; label: string; show: boolean; sort: string }[];
  updateColumns: (
    columns: { id: string; label: string; show: boolean; sort: string }[]
  ) => void;
};

export default function DropDownShowColumn(props: DropDownShowColumnProps) {
  const { columns, updateColumns } = props;

  const [isVisible, setIsVisible] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const updatedColumns = Array.from(columns);
    const [movedColumn] = updatedColumns.splice(source.index, 1);
    updatedColumns.splice(destination.index, 0, movedColumn);

    updateColumns(updatedColumns);
  };

  return (
    <div className='relative w-fit bg-white' ref={dropdownRef}>
      <ButtonComponent
        onClick={() => setIsVisible(!isVisible)}
        className='h-[30px]'
      >
        項目編集モード
      </ButtonComponent>
      {isVisible && (
        <div
          className={cn(
            'absolute right-0 top-full z-50 mt-[2px] max-h-[390px] w-[260px] overflow-auto bg-white',
            'background-white rounded border-1 border-color-2rd-border p-5',
            'show-column select-none'
          )}
        >
          <div
            className={cn(
              'text-sm font-bold',
              'flex items-center justify-between',
              'mb-4'
            )}
          >
            項目の表示／非表示
            <div
              className={cn(
                'flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-primary-200'
              )}
              onClick={() => setIsVisible(false)}
            >
              <IoCloseSharp className='h-3 w-3 text-primary' />
            </div>
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='columns' type='group'>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className='space-y-2'
                >
                  {columns.map((column, index) => (
                    <div key={column.id}>
                      <Draggable
                        key={column.id}
                        draggableId={column.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className='flex h-8 items-center justify-between bg-white'
                          >
                            <div className='flex w-full items-center gap-[10px]'>
                              <div
                                {...provided.dragHandleProps}
                                className='cursor-grab pb-2'
                              >
                                <MdOutlineDragIndicator />
                              </div>
                              <div className='flex w-full flex-1 items-center justify-between border-b border-color-2rd-border pb-2 pr-2'>
                                {column.label}
                                <div
                                  onClick={() => {
                                    const updatedColumns = columns.map((col) =>
                                      col.id === column.id
                                        ? { ...col, show: !col.show }
                                        : col
                                    );
                                    updateColumns(updatedColumns);
                                  }}
                                  className='cursor-pointer'
                                >
                                  {column.show ? <OpenEye /> : <CloseEye />}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </div>
  );
}

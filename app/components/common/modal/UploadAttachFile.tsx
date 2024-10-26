'use client';

import React, { useState } from 'react';
import ModalComponent from '../ModalComponent';
import { File } from '../../svg';
import ButtonComponent from '../element/ButtonComponent';
import { useDisclosure } from '@nextui-org/react';
import Toast from '../Toast';
import { toast } from 'react-toastify';

const UploadAttachFile = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [file, setFile] = useState('');

  const handleCreateCourse = (title: string) => {
    toast(<Toast title={title} className='w-[480px]' />, {
      style: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top: -15,
        width: 500,
      },
      toastId: title,
    });
  };

  const handleDropFile = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const pathFile = e.dataTransfer.files[0];
    if (pathFile) {
      setFile(pathFile.name);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const pathFile = files[0];
      setFile(pathFile.name);
    }
  };
  return (
    <>
      <ButtonComponent className='w-fit bg-primary text-white' onPress={onOpen}>
        Upload Attach File
      </ButtonComponent>
      <ModalComponent
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className='min-h-[464px] min-w-[1134px] items-center'
        classNameBody='justify-center'
      >
        <label
          className='flex h-[208px] w-[940px] cursor-pointer flex-col items-center justify-center gap-[9px] rounded border-2 border-dashed border-color-selected'
          htmlFor='upload-file'
          onDrop={(e) => handleDropFile(e)}
          onDragOver={(e) => e.preventDefault()}
        >
          <File />
          <p className='w-52 text-center font-bold leading-5'>
            ここにドラッグ＆ドロップ または
            <span className='text-color-selected'>ファイルを選択</span>
          </p>
          <div className='text-xs leading-[18px] tracking-[0.005em] text-color-label'>
            ※ PDF、JPEG、PNG、Excelのみアップロード可能
            <br />※ 一度に5個までアップロード可能です
          </div>
          <input
            aria-label='file'
            type='file'
            id='upload-file'
            accept='.pdf, .jpeg, .jpg, .png, .xlsx, .xls'
            hidden
            multiple
            onChange={(e) => {
              const { files } = e.target;
              if (files) {
                handleCreateCourse(
                  `${files.length} file was uploaded successfully!`
                );
              }
              handleUpload(e);
              onClose();
            }}
          />
        </label>
      </ModalComponent>
    </>
  );
};

export default UploadAttachFile;

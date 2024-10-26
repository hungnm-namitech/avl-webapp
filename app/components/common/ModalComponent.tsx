import React from 'react';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalProps,
  cn,
} from '@nextui-org/react';
import { Close } from '../svg';

interface Props extends ModalProps {
  classNameBody?: string;
  classNameClose?: string;
}

export default function ModalComponent({
  children,
  isOpen,
  onOpenChange,
  classNames,
  classNameBody,
  classNameClose,
  ...props
}: Readonly<{ children: React.ReactNode }> & Props) {
  return (
    <div>
      <Modal
        hideCloseButton
        isOpen={isOpen}
        placement={'center'}
        onOpenChange={onOpenChange}
        classNames={{
          base: 'min-h-[520px] rounded overflow-y-auto hidden-scroll relative text-color-base',
          wrapper: 'overflow-x-clip',
          ...classNames,
        }}
        {...props}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <button
                onClick={onClose}
                className={cn(
                  'absolute right-[35px] top-[37px]',
                  classNameClose
                )}
              >
                <Close />
              </button>
              <ModalBody className={cn('h-full gap-0 p-0', classNameBody)}>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

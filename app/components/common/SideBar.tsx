'use client';

import { Accordion, AccordionItem, cn, Image } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { MenuClose, MenuOpen } from '../svg';
import Link from 'next/link';
import ArrowMenu from '../svg/common/ArrowMenu';
import { menuItem } from '@/app/utils/menu';
import { usePathname } from 'next/navigation';
import { useLayoutPage } from '@/app/store/layoutPage';
import LinkRedirect from './LinkRedirect';

/**
 *
 * @component SideBar
 */

export default function SideBar() {
  const [isExpand, setIsExpand] = useState(true);
  const pathname = usePathname();

  const saveIsOpenMenu = useLayoutPage((state) => state.saveIsOpenMenu);

  useEffect(() => {
    saveIsOpenMenu(isExpand);
  }, [isExpand, saveIsOpenMenu]);

  const renderMenu = () => {
    return menuItem.map((item) => {
      if (item.hasChild && item.child?.length) {
        return (
          <Accordion
            selectionMode='multiple'
            itemClasses={{ heading: 'group' }}
            className={cn('bg-white p-0')}
            key={item.text}
          >
            <AccordionItem
              key='1'
              aria-label='menu'
              title={item.text}
              className='p-0'
              disableIndicatorAnimation
              indicator={<ArrowMenu />}
              classNames={{
                trigger: [
                  'bg-secondary py-0 data-[open=true]:bg-color-selected group px-4 py-[18px] group-hover:bg-color-selected',
                  pathname.includes(item.link) &&
                    'bg-color-selected text-white',
                ],
                title: [
                  'text-base font-bold leading-5 text-color-base group-hover:text-white data-[open=true]:text-white',
                  pathname.includes(item.link) &&
                    'bg-color-selected text-white',
                ],
                indicator: [
                  'data-[open=true]:rotate-0 group-hover:text-white -rotate-90 text-color-base transition data-[open=true]:text-white',
                  pathname.includes(item.link) &&
                    'bg-color-selected text-white',
                ],
                content: 'py-[2px] pb-0',
              }}
            >
              <div className='flex flex-col gap-[1px] bg-white'>
                {item.child.map((child) => (
                  <LinkRedirect
                    href={child.link}
                    className={cn(
                      'cursor-pointer bg-child-item px-4 py-[18px] text-base font-bold leading-5 text-white hover:bg-color-selected',
                      pathname.includes(child.link) &&
                        'bg-color-selected text-white'
                    )}
                    key={child.text}
                  >
                    {child.text}
                  </LinkRedirect>
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        );
      } else {
        return (
          <LinkRedirect
            href={item.link}
            className={cn(
              'cursor-pointer bg-secondary px-4 py-[18px] text-base font-bold leading-5 text-color-base hover:bg-color-selected hover:text-white',
              pathname.includes(item.link) && 'bg-color-selected text-white'
            )}
            key={item.text}
          >
            {item.text}
          </LinkRedirect>
        );
      }
    });
  };

  return (
    <div
      className={cn(
        'relative z-[41] block h-full min-h-screen w-fit bg-secondary'
      )}
    >
      <div
        className={cn(
          'relative flex flex-col gap-[1px] duration-300',
          isExpand ? 'w-[160px]' : 'w-[50px]',
          'bg-white'
        )}
      >
        <div
          className={cn(
            'flex h-16 items-center justify-between bg-secondary px-4 py-5'
          )}
        >
          <Image src='/images/logo.png' alt='logo' className='rounded-none' />
          <div
            className='cursor-pointer'
            onClick={() => setIsExpand(!isExpand)}
          >
            {isExpand ? <MenuOpen /> : <MenuClose />}
          </div>
        </div>

        <div
          className={cn(
            'side-bar w-full overflow-y-auto overflow-x-hidden bg-secondary pb-4',
            isExpand ? 'block' : 'hidden'
          )}
        >
          <div
            className={cn(
              'relative flex flex-col gap-[1px] bg-white transition-all',
              isExpand
                ? 'min-w-[160px] opacity-100 duration-1000'
                : 'h-0 w-0 opacity-0 duration-0'
            )}
          >
            {renderMenu()}
          </div>
        </div>
      </div>
    </div>
  );
}

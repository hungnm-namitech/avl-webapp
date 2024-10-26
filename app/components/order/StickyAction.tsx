import { Button, cn } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import ArrowMenu from '../svg/common/ArrowMenu';

interface StickyActionProps {
  labelSticky: LabelSticky[];
  LinkHref: LinkHref[];
}

/**
 *
 * @component StickyAction
 */
export default function StickyAction(props: StickyActionProps) {
  const { labelSticky, LinkHref } = props;

  const goToLink = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    if (document?.getElementById(link)) {
      const element = document?.getElementById(link);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <div className='flex flex-col'>
      {labelSticky.length > 0 && (
        <div className='mb-8 flex w-full'>
          {labelSticky.map((item, index) => {
            return (
              <div key={index} className='relative flex h-8'>
                <div
                  className={cn(
                    'flex items-center justify-center bg-color-gray text-xs leading-[15px]',
                    'z-0 font-bold',
                    'px-6',
                    item.selected
                      ? 'bg-color-selected pl-8 pr-4 text-white'
                      : 'text-color-selected'
                  )}
                >
                  {item.text}
                </div>
                <div
                  className={cn(
                    'absolute -right-3 z-10 h-0 w-0 border-b-[16px] border-l-[12px] border-t-[16px]',
                    item.selected
                      ? 'border-color-selected'
                      : 'border-color-gray',
                    'border-b-transparent border-t-transparent'
                  )}
                ></div>
              </div>
            );
          })}
        </div>
      )}

      <div className='mb-6 flex flex-col gap-1'>
        <div className='text-xs font-bold leading-[15px]'>目次</div>
        {LinkHref.map((item) => (
          <div
            key={item.text}
            className='flex justify-center border-b border-color-2rd-border'
          >
            <Link
              href={item.link}
              className='flex min-h-[37px] flex-1 items-center justify-start text-base leading-5 text-primary underline-offset-2 hover:underline'
              onClick={(e) => {
                goToLink(e, item.link);
              }}
            >
              {item.text}
            </Link>
            <div className='flex items-center text-primary'>
              <ArrowMenu />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

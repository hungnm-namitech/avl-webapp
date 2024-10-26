import Link from 'next/link';
import React from 'react';
import ArrowMenu from '../svg/common/ArrowMenu';

interface StickyActionProps {
  LinkHref: LinkHref[];
}

/**
 *
 * @component StickyAction
 */
export default function StickyAction(props: StickyActionProps) {
  const { LinkHref } = props;

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
    <div className='mb-4 flex flex-col gap-1'>
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
  );
}

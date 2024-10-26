'use client';
import { useRouter } from 'next-nprogress-bar';
import React from 'react';

type LinkRedirectProps = {
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function LinkRedirect(props: LinkRedirectProps) {
  const { href, className, children } = props;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
      className={className}
    >
      {children}
    </div>
  );
}

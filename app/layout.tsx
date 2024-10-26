import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';
import './globals.css';
import { cn, NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import AuthSessionProvider from './providers/AuthSessionProvider';
import QueryProviders from './providers/QueryProviders';
import ProgressBarProvider from './providers/ProgressBarProvider';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AVL',
  description: 'Description AVL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(notoSansJP.className, 'scroll-smooth')}
        suppressHydrationWarning={true}
      >
        <QueryProviders>
          <AuthSessionProvider>
            <NextUIProvider locale='ja-JP'>
              <ProgressBarProvider>{children}</ProgressBarProvider>
            </NextUIProvider>
            <ToastContainer
              position='top-center'
              autoClose={3000}
              closeOnClick
              closeButton={false}
              hideProgressBar={true}
              className={'!w-[400px]'}
            />
          </AuthSessionProvider>
        </QueryProviders>
      </body>
    </html>
  );
}

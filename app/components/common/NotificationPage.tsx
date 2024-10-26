import React, { useEffect } from 'react';
import { useLayoutPage } from '@/app/store/layoutPage';
import ButtonComponent from '@/app/components/common/element/ButtonComponent';

interface Breadcrumb {
  href: string;
  text: string;
}

interface Props {
  breadcrumbs: Breadcrumb[];
  title: string;
  buttonTitle: string;
  onPress: () => void;
  extraContent?: React.ReactNode;
}

const NotificationPage = ({
  breadcrumbs,
  title,
  buttonTitle,
  onPress,
  extraContent,
}: Props) => {
  const saveBreadcrumbs = useLayoutPage((state) => state.saveBreadcrumbs);

  useEffect(() => {
    saveBreadcrumbs(breadcrumbs);
  }, [saveBreadcrumbs, breadcrumbs]);

  return (
    <div className='flex h-content-screen flex-col items-center justify-center gap-10'>
      <p className='text-[40px] font-bold'>{title}</p>
      <ButtonComponent
        onPress={onPress}
        variant='solid'
        color='primary'
        className='h-14 w-[360px] text-base'
      >
        {buttonTitle}
      </ButtonComponent>
      {extraContent && <div>{extraContent}</div>}
    </div>
  );
};

export default NotificationPage;

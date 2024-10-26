import React from 'react';

type Props = {
  content: string;
  id?: string;
};

const TitleComponent = ({ content, id }: Props) => {
  return (
    <p
      className='w-full border-b-3 border-primary pb-3 text-xl font-bold leading-[25px] text-primary'
      id={id}
    >
      {content}
    </p>
  );
};

export default TitleComponent;

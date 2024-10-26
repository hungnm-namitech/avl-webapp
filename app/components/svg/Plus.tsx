import React from 'react';

type Props = {
  className?: string;
};
const Plus = (props: Props) => {
  const { className } = props;
  return (
    <>
      <svg
        width='12'
        height='12'
        viewBox='0 0 12 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
      >
        <path
          d='M5.16797 5.16797V0.167969H6.83464V5.16797H11.8346V6.83464H6.83464V11.8346H5.16797V6.83464H0.167969V5.16797H5.16797Z'
          fill='currentColor'
        />
      </svg>
    </>
  );
};

export default Plus;

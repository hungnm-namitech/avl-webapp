import React from 'react';

type Props = {
  color?: boolean;
};

const PaginationArrow = ({ color }: Props) => {
  return (
    <div>
      <svg
        width='6'
        height='8'
        viewBox='0 0 6 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.31764 3.99944L5.20513 6.88694L4.3803 7.71178L0.667969 3.99944L4.3803 0.287109L5.20513 1.11194L2.31764 3.99944Z'
          fill={color ? '#989898' : '#00376E'}
        />
      </svg>
    </div>
  );
};

export default PaginationArrow;

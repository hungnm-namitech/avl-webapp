import React from 'react';

type Props = {
  color?: boolean;
};

const SingleArrow = ({ color }: Props) => {
  return (
    <div>
      <svg
        width='9'
        height='8'
        viewBox='0 0 9 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.64967 3.99944L4.53717 6.88694L3.71233 7.71178L0 3.99944L3.71233 0.287109L4.53717 1.11194L1.64967 3.99944Z'
          fill={color ? '#989898' : '#00376E'}
        />
        <path
          d='M5.64967 3.99944L8.53717 6.88694L7.71233 7.71178L4 3.99944L7.71233 0.287109L8.53717 1.11194L5.64967 3.99944Z'
          fill={color ? '#989898' : '#00376E'}
        />
      </svg>
    </div>
  );
};

export default SingleArrow;

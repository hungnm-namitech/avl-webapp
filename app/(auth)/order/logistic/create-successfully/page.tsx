'use client';

import React from 'react';
import OrderCreateSuccessfully from '@/app/components/order/OrderCreateSuccessfully';
import { ORDER_TYPE } from '@/app/constants/order.const';

/**
 *
 * @page ORD0111
 */

const LogisticSuccessfully = () => {
  return <OrderCreateSuccessfully orderType={ORDER_TYPE.LOGISTICS} />;
};

export default LogisticSuccessfully;

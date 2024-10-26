import { VALIDATE_LIST } from '@/app/constants/constant';
import { format } from 'date-fns';
import { z } from 'zod';

const schemaOrderMoving = z
  .object({
    regularCustomer: z.string().optional(),
    orderNumber: z.string().optional(),
    branchInCharge: z.string().optional(),
    orderTaker: z.string().optional(),
    dispatcher: z.string().optional(),
    billBranch: z.string().optional(),
    subcategory: z.string().optional(),
    desiredVehicleClass: z.string().optional(),
    desiredVehicleOption: z.string().optional(),
    desiredVehicleItems: z.string().optional(),
    remarks: z.string().optional(),
    orderBranch: z.string().optional(),
    loadingDestinationConference: z.string().optional(),
    loadingConsolidationStore: z.string().optional(),
    loadingDate: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    notes: z.string().optional(),
    isExclusive: z.boolean().optional(),
    unloadingConsolidationStore: z.string().optional(),
    unloadingDate: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    receiptNumber: z.string().optional(),
    unloadingNotes: z.string().optional(),
    //
    requestedBy: z.string().optional(),
    //
    distance: z
      .string({
        required_error: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.INVALID_NUMBER })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      }),
    cubic: z
      .string({
        required_error: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.INVALID_NUMBER })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT,
      }),
    //
    fareExplanation: z.string().optional(),
    freightUnitPrice: z
      .string({
        required_error: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.INVALID_NUMBER,
      }),
    destinationPrefecture: z.string().optional(),
    destinationCity: z.string().optional(),
    appointmentTime: z.string().optional(),
    expressFee: z.string().optional(),
    salesFee: z.string().optional(),
    unloadingShop: z.string().optional(),
    additionalChargeExplanation: z.string().optional(),
    additionalChargeUnitPrice: z
      .string()
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT,
      }),
    additionalChargeFile: z.string().optional(),
    //
    totalSalesAmount: z.string().optional(),
    billingDate: z.string().optional(),
    billingDeadline: z.string().optional(),
  })
  .refine((data) => data.loadingDate >= data.unloadingDate, {
    path: ['loadingDate'],
    message: VALIDATE_LIST.BEFORE_UNLOADING_DATE,
  })
  .refine((data) => data.loadingDate < data.unloadingDate, {
    path: ['unloadingDate'],
    message: VALIDATE_LIST.BEFORE_UNLOADING_DATE,
  });

const schemaOrderMaster = z.object({
  orderDate: z.string().optional(),
  orderNumber: z.string().optional(),
  regularCustomer: z.string().optional(),
  orderBranch: z.string().optional(),
  branchInCharge: z.string().optional(),
  orderTaker: z.string().optional(),
  dispatcher: z.string().optional(),
  billingBranch: z.string().optional(),
  subcategory: z.string().optional(),
  exclusive: z.string().optional(),
  isExclusive: z.boolean().optional(),
  exclusiveNote: z.string().optional(),
  desiredVehicleClassOption: z.string().optional(),
  desiredVehicleClass: z.string().optional(),
  desiredVehicleCategory: z.string().optional(),
  numberOfUnitRequested: z.string().optional(),
  remarks: z.string().optional(),
  //
  loadingDestinationName: z.string().optional(),
  loadingIsAddress: z.boolean().optional(),
  loadingDestinationPrefecture: z.string().optional(),
  loadingDestinationCity: z.string().optional(),
  loadingAddress: z.string().optional(),
  loadingCustomerRepresentative: z.string().optional(),
  loadingCustomerContact: z.string().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  loadingDesiredDate: z.string().optional(),
  loadingDayOfWeek: z.string().array().optional(),
  loadingPreferredTimeSlot: z.string().optional(),
  loadingNotes: z.string().optional(),
  //
  unloadingDestinationName: z.string().optional(),
  unloadingIsAddress: z.boolean().optional(),
  unloadingDestinationPrefecture: z.string().optional(),
  unloadingDestinationCity: z.string().optional(),
  unloadingAddress: z.string().optional(),
  unloadingCustomerRepresentative: z.string().optional(),
  unloadingCustomerContact: z.string().optional(),
  unloadingDesiredDate: z.string().optional(),
  unloadingPreferredTimeSlot: z.string().optional(),
  unloadingNotes: z.string().optional(),
  //
  requestedBy: z.string().optional(),
  //
  distance: z
    .string({
      required_error: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
    })
    .max(9, { message: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
    }),
  cubic: z
    .string({
      required_error: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT,
    })
    .max(9, { message: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.CUBIC.NUMBER_AFTER_DECIMAL_POINT,
    }),
  baggageName: z.string().optional(),
  packaging: z.string().optional(),
  weight: z
    .string({
      required_error: VALIDATE_LIST.WEIGHT.NUMBER_OF_DIGIT,
    })
    .max(9, { message: VALIDATE_LIST.WEIGHT.NUMBER_OF_DIGIT })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.WEIGHT.NUMBER_AFTER_DECIMAL_POINT,
    }),
  quantity: z.string().optional(),
  talent: z
    .string({
      required_error: VALIDATE_LIST.TALENT.NUMBER_OF_DIGIT,
    })
    .max(9, { message: VALIDATE_LIST.TALENT.NUMBER_OF_DIGIT })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.TALENT.NUMBER_AFTER_DECIMAL_POINT,
    }),
  //
  fareExplanation: z.string().optional(),
  freightUnitPrice: z.string().optional(),
  isBasicSaleFee: z.boolean().optional(),
  additionalChargesCategory: z.string().optional(),
  additionalChargesExplanation: z.string().optional(),
  additionalChargesUnitPrice: z.string().optional(),
  isBasicSaleFeeAdditionalFee: z.boolean().optional(),
});

const schemaOrderLogistic = z
  .object({
    orderNumber: z.string().optional(),
    regularCustomer: z.string().optional(),
    orderBranch: z.string().optional(),
    responsibleBranch: z.string().optional(),
    branchInCharge: z.string().optional(),
    orderTaker: z.string().optional(),
    dispatcher: z.string().optional(),
    billBranch: z.string().optional(),
    subcategory: z.string().optional(),
    isExclusive: z.boolean().optional(),
    desiredVehicleClass: z.string().optional(),
    unitRequested: z.string().optional(),
    desiredVehicleOPtion: z.string().optional(),
    customerId1: z.string().optional(),
    customerId2: z.string().optional(),
    remarks: z.string().optional(),
    loadingCompletionTime: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    unloadingCompletionTime: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    attachedFile: z.string().optional(),
    loadingDate: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    loadingTime: z.string().optional(),
    finalLoadingTime: z.string().optional(),
    loadingDestination: z.string().optional(),
    isAddress: z.boolean().optional(),
    destinationPrefecture: z.string().optional(),
    destinationCity: z.string().optional(),
    loadingAddress: z.string().optional(),
    loadingCustomerRepresentative: z.string().optional(),
    loadingCustomerContact: z
      .string()
      .max(13, { message: VALIDATE_LIST.INVALID_NUMBER })
      .regex(new RegExp(VALIDATE_LIST.LOGISTIC.REGEX_NUMBER_CONTACT), {
        message: VALIDATE_LIST.LOGISTIC.INVALID_NUMBER_CONTACT,
      }),
    loadingNotes: z.string().optional(),
    unloadingDate: z
      .date({
        required_error: VALIDATE_LIST.INVALID_DATE,
        invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
      })
      .min(new Date('01/01/1970'), {
        message: VALIDATE_LIST.INVALID_DATE,
      }),
    unloadingTime: z.string().optional(),
    loadingNumberOrder: z.string().optional(),
    unloadingDestination: z.string().optional(),
    unIsAddress: z.boolean().optional(),
    unDestinationPrefecture: z.string().optional(), //edit
    unloadingDestPrefecture: z.string().optional(),
    unloadingDestCity: z.string().optional(),
    unloadingAddress: z.string().optional(),
    unloadingCustomerRepresentative: z.string().optional(),
    unloadingCustomerContact: z
      .string({ required_error: VALIDATE_LIST.INVALID_NUMBER })
      .max(13, { message: VALIDATE_LIST.INVALID_NUMBER })
      .regex(new RegExp(VALIDATE_LIST.LOGISTIC.REGEX_NUMBER_CONTACT), {
        message: VALIDATE_LIST.LOGISTIC.INVALID_NUMBER_CONTACT,
      }),
    unloadingNotes: z.string().optional(),
    requestedBy: z.string().optional(),
    distance: z
      .string({
        required_error: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.DISTANCE.NUMBER_OF_DIGIT,
      }),
    cubic: z
      .string({
        required_error: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.CUBIC.NUMBER_OF_DIGIT })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.CUBIC.NUMBER_AFTER_DECIMAL_POINT,
      }),
    baggage: z.string().optional(),
    packaging: z.string().optional(),
    quantity: z.string().optional(),
    weight: z
      .string({
        required_error: VALIDATE_LIST.WEIGHT.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.WEIGHT.NUMBER_OF_DIGIT })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.WEIGHT.NUMBER_AFTER_DECIMAL_POINT,
      }),
    talent: z
      .string({
        required_error: VALIDATE_LIST.TALENT.NUMBER_OF_DIGIT,
      })
      .max(9, { message: VALIDATE_LIST.TALENT.NUMBER_OF_DIGIT })
      .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
        message: VALIDATE_LIST.TALENT.NUMBER_AFTER_DECIMAL_POINT,
      }),
    chargeFare: z.string().optional(),
    totalSale: z.string().optional(),
    billDate: z.string().optional(),
    billDeadline: z.string().optional(),
    paymentFare: z.string().optional(),
    expresswayFee: z.string().optional(),
    highSpeed: z.string().optional(),
    totalAmount: z.string().optional(),
    paymentDate: z.string().optional(),
    paymentDeadline: z.string().optional(),
  })
  .refine((data) => data.loadingDate < data.unloadingDate, {
    path: ['loadingDate'],
    message: VALIDATE_LIST.BEFORE_UNLOADING_DATE,
  });

const schemaSplitOrder = z.object({
  splitOrder: z.array(
    z.object({
      loadingDate: z
        .date({
          required_error: VALIDATE_LIST.INVALID_DATE,
          invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
        })
        .min(new Date('01/01/1970'), {
          message: VALIDATE_LIST.INVALID_DATE,
        }),
      unloadingDate: z
        .date({
          required_error: VALIDATE_LIST.INVALID_DATE,
          invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
        })
        .min(new Date('01/01/1970'), {
          message: VALIDATE_LIST.INVALID_DATE,
        }),
      nameLoadingDestination: z.string().optional(),
      nameUnloadingDestination: z.string().optional(),
      fare: z
        .string()
        .max(10, { message: VALIDATE_LIST.INVALID_NUMBER })
        .optional(),
      expressFee: z
        .string()
        .max(10, { message: VALIDATE_LIST.INVALID_NUMBER })
        .optional(),
    })
  ),
});

export type IFormSplitOrder = z.infer<
  typeof schemaSplitOrder
>['splitOrder'][number];

export type IFormOrderLogisticCreate = z.infer<typeof schemaOrderLogistic>;
export {
  schemaOrderMoving,
  schemaOrderLogistic,
  schemaOrderMaster,
  schemaSplitOrder,
};

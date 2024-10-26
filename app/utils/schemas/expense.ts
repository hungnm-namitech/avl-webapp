import { VALIDATE_LIST } from '@/app/constants/constant';
import { z } from 'zod';

export const schemaExpense = z.object({
  expenseCategory: z.string().optional(),
  expenseType: z.string().optional(),
  priceTax: z
    .string({
      required_error: VALIDATE_LIST.PRICE_TAX.NUMBER_OF_DIGIT,
    })
    .max(10, { message: VALIDATE_LIST.PRICE_TAX.NUMBER_OF_DIGIT })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.INVALID_NUMBER,
    }),
  isPettySettlement: z.boolean(),
  businessPartner: z.string().optional(),
  transactionDate: z
    .date({
      required_error: VALIDATE_LIST.INVALID_DATE,
      invalid_type_error: VALIDATE_LIST.FORMAT_DATE,
    })
    .min(new Date('01/01/1970'), {
      message: VALIDATE_LIST.INVALID_DATE,
    }),
  courseId: z.string().optional(),
  applicableDecisionNumber: z
    .string({
      required_error: VALIDATE_LIST.INVALID_NUMBER,
    })
    .max(20, { message: VALIDATE_LIST.INVALID_NUMBER })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.INVALID_NUMBER,
    }),
  carNumber: z
    .string({
      required_error: VALIDATE_LIST.INVALID_NUMBER,
      message: VALIDATE_LIST.INVALID_NUMBER,
    })
    .regex(new RegExp(VALIDATE_LIST.REGEX_NUMBER), {
      message: VALIDATE_LIST.INVALID_NUMBER,
    }),
  etcCardNumber: z.string().optional(),
  fuelCardNumber: z.string().optional(),
  remarks: z.string().optional(),
  file: z.string().optional(),
});

export type IExpense = z.infer<typeof schemaExpense>;

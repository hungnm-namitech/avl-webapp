import { FORGOT_PASSWORD } from '@/app/constants/constant';
import { z } from 'zod';

export const schemaForgotPassword = z.object({
  email: z
    .string()
    .min(FORGOT_PASSWORD.MIN_LENGTH, {
      message: FORGOT_PASSWORD.MESSAGE_REQUIRED,
    })
    .max(FORGOT_PASSWORD.MAX_LENGTH, {
      message: FORGOT_PASSWORD.MESSAGE_LENGTH,
    })
    .email({ message: FORGOT_PASSWORD.MESSAGE_FORMAT }),
});

export type IFormForgotPassword = z.infer<typeof schemaForgotPassword>;

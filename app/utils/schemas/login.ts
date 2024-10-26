import { LOGIN } from '@/app/constants/constant';
import { z } from 'zod';

export const schemaLogin = z.object({
  userIdOrEmail: z.string().min(LOGIN.MIN_LENGTH_ID, {
    message: LOGIN.MESSAGE_REQUIRED_ID,
  }),
  password: z.string().min(LOGIN.MIN_LENGTH_PASSWORD, {
    message: LOGIN.MESSAGE_REQUIRED_PASSWORD,
  }),
});
export type IFormLogin = z.infer<typeof schemaLogin>;

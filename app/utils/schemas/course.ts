import { z } from 'zod';

const schemaCourseList = z.object({
  loadingDateStart: z.date(),
  loadingDateEnd: z.date(),
  unloadingDateStart: z.date(),
  unloadingDateEnd: z.date(),
});

export { schemaCourseList };

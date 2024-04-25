import z from "zod";

export const ActiveTermSchema = z.object({
  hours: z.number().min(1).max(23),
  minutes: z.number().min(0).max(59).default(0),
});

export const ActivitySchema = z.object({
  n8_1: z.number().min(1).max(7),
  n8_2: ActiveTermSchema,
  n9_1: z.number().min(1).max(7),
  n9_2: ActiveTermSchema,
  n10: z.number(),
});

export interface IActivity {
  n8_1: number;
  n8_2: IActivityTerm;
  n9_1: number;
  n9_2: IActivityTerm;
  n10: number;
}

export interface IActivityTerm
  extends Partial<z.infer<typeof ActiveTermSchema>> {}

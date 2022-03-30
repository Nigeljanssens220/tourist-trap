import * as z from "zod";
import { CompleteUser, UserModel } from "./index";

export const _BookingModel = z.object({
  id: z.string(),
  userId: z.string(),
  createAt: z.date(),
  updateAt: z.date(),
  status: z.string(),
  amount: z.number(),
  currency: z.string(),
});

export interface CompleteBooking extends z.infer<typeof _BookingModel> {
  user: CompleteUser;
}

/**
 * BookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() =>
  _BookingModel.extend({
    user: UserModel,
  })
);

export const PartialBookingModel: z.ZodSchema<Partial<CompleteBooking>> =
  z.lazy(() =>
    _BookingModel.extend({
      user: UserModel,
    })
  );

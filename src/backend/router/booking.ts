import { createRouter } from "@/pages/api/trpc/[trpc]";
import { prisma } from "@/backend/utils/prisma";
import { PartialBookingModel } from "../../../prisma/zod/index";
import { Booking } from "@prisma/client";

export const bookingRouter = createRouter().mutation("create-booking", {
  input: PartialBookingModel,
  async resolve({ input }) {
    // Create a new booking and connect it to an existing user
    const booking: Booking = await prisma.booking.create({
      data: {
        status: input.status!,
        amount: input.amount!,
        currency: input.currency!,
        user: {
          connect: { id: input.userId! },
        },
      },
    });

    return booking;
  },
});

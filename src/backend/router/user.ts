import { createRouter } from "@/pages/api/trpc/[trpc]";
import { prisma } from "@/backend/utils/prisma";
import { PartialUserModel } from "prisma/zod";
import { User } from "@prisma/client";

export const userRouter = createRouter()
  .query("get", {
    input: PartialUserModel,
    async resolve({ input }) {
      const user: User | null = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
      return user;
    },
  })
  .query("get-bookings", {
    input: PartialUserModel,
    async resolve({ input }) {
      const userBookings = await prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          bookings: true,
        },
      });
      return userBookings;
    },
  });

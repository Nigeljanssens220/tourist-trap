import { createRouter } from "@/pages/api/trpc/[trpc]";
import { amadeus, getLocations } from "@/utils/amadeus";
import { z } from "zod";

export const amadeusRouter = createRouter()
  .query("get-travel-restrictions", {
    input: z.object({
      countryCode: z.string(),
    }),
    async resolve({ input }) {
      const restrictions = await amadeus.client.get(
        "/v1/duty-of-care/diseases/covid19-area-report",
        {
          ...input,
        }
      );
      console.log(restrictions.result);
      return restrictions.result.data;
    },
  })
  .query("get-location", {
    input: z.string({
      required_error: "Location is required",
      invalid_type_error: "Location must be a string",
    }),
    async resolve({ input }) {
      // Airports and City Search (autocomplete)
      // Find all the cities and airports starting
      // with a specific string.
      console.log(input);
      const locations = getLocations(input);
      console.log(locations);
      return locations;
    },
  })
  .query("get-flight-inspiration", {
    input: z.object({
      origin: z.string(),
      duration: z.string().nullable(),
      departureDate: z.string().nullable(),
      maxPrice: z.number().int().nullable(),
      nonStop: z.boolean().nullable(), // non-stop = no transfers, only direct flights
    }),
    async resolve({ input }) {
      console.log(input);
      const flightInspiration = amadeus.shopping.flightDestinations.get({
        ...input,
      });

      return flightInspiration.result.data;
    },
  });

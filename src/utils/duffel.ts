//@ts-nocheck
import { Duffel, Offer, OfferRequest } from "@duffel/api";
import moment from "moment";

export const duffel = new Duffel({
  token: process.env.DUFFEL_ACCESS_TOKEN || "",
  debug: {
    verbose:
      process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
      process.env.VERCEL_ENV === "development",
  },
});

export const flightProperties = (offerRequest: OfferRequest) => {
  const offers = offerRequest.offers;

  const cheapestFlight = offers.reduce(function (prev, curr) {
    return prev.total_amount < curr.total_amount ? prev : curr;
  });

  const fastestFlight = offers.reduce(function (
    prev: Omit<Offer, "available_services">,
    curr
  ) {
    return moment.duration(prev.slices.duration) <
      moment.duration(curr.slices.duration)
      ? prev
      : curr;
  });

  const lowestEmissionsFlight = offers.reduce(function (prev, curr) {
    return prev.total_emissions_kg < curr.total_emissions_kg ? prev : curr;
  });

  return { cheapestFlight, fastestFlight, lowestEmissionsFlight };
};

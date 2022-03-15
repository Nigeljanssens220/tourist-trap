import SkeletonFlightCard from "@/components/Card/SkeletonFlightCard";
import ThreeSectionCard from "@/components/Card/ThreeSectionCard";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { trpc } from "@/utils/trpc";
import {
  CreateOfferRequest,
  CreateOfferRequestQueryParameters,
  OfferRequest,
} from "@duffel/api";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

interface FlightsProps {
  origin: string;
  destination: string;
  numberAdults: string;
  // numberChildren: string;
  departure_date: string;
  return_date: string;
}

const Flights: NextPage<FlightsProps> = ({
  origin,
  destination,
  numberAdults,
  // numberChildren,
  departure_date,
  return_date,
}) => {
  const [loading, setLoading] = useState(true);
  const [offerRequest, setOfferRequest] = useState<OfferRequest>();
  const { client } = trpc.useContext();
  const params = {
    slices: [
      {
        origin: origin,
        destination: destination,
        departure_date: departure_date,
      },
      {
        origin: destination,
        destination: origin,
        departure_date: return_date,
      },
    ],
    passengers: Array(Number(numberAdults)).fill({ type: "adult" }),
    cabin_class: "economy",
    return_offers: false,
  };

  const fetchOfferRequest = useCallback(async () => {
    const data = await client.query("duffel.get-flight-offers", {
      ...params,
    });

    setOfferRequest(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchOfferRequest().catch(console.error);
  }, [fetchOfferRequest]);

  return (
    <div className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-screen-2xl mx-auto">
      <div className="flex flex-col ">
        <ThreeSectionCard className="hidden lg:block" />
        <Typography variant="h1" component="h1" className="pb-10">
          Flights
        </Typography>
        <Section
          textVariant="sm"
          textWeight="thin"
          className="text-gray-500 lg:max-w-screen-lg md:text-md lg:text-lg"
        >
          This is the section text. This text is supposed to contain information
          about the city the user is looking to book tickets for. This is the
          section text. This text is supposed to contain information about the
          city the user is looking to book tickets for. This is the section
          text. This text is supposed to contain information about the city the
          user is looking to book tickets for.
        </Section>
        <SkeletonFlightCard />
      </div>

      {/* <div>{cabinClass}</div>
    <div>{returnOffers}</div>
    {slicesData.map((slice: any) => (
      <div key={slice.origin}>{slice.origin}</div>
    ))} */}
    </div>
  );
};

Flights.getInitialProps = async ({ query }) => {
  return {
    origin: query.origin as string,
    destination: query.destination as string,
    numberAdults: query.numberAdults as string,
    numberChildren: query.numberChildren as string,
    departure_date: query.departure_date as string,
    return_date: query.return_date as string,
  };
};

export default Flights;

/* eslint-disable react-hooks/exhaustive-deps */
import { trpc } from "@/utils/trpc";
import { Offer, OfferRequest } from "@duffel/api";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import SkeletonFlightCard from "@/components/Animations/Loading/SkeletonCard";
import ThreeSectionCard from "@/components/Card/ThreeSectionCard";
import Section from "@/components/Section";
import Typography from "@/components/Typography";

import { flightProperties } from "@/utils/duffel";
import Spinner from "@/components/Animations/Loading/Spinner";

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
  const [cheapestFlight, setCheapestFlight] =
    useState<Omit<Offer, "available_services">>();
  const [fastestFlight, setFastestFlight] =
    useState<Omit<Offer, "available_services">>();
  const [lowestEmissionsFlight, setLowestEmissionsFlight] =
    useState<Omit<Offer, "available_services">>();

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
    return_offers: true,
  };

  // const getFlightProperties = useCallback((offerRequest: OfferRequest) => {
  //   const { cheapestFlight, fastestFlight, lowestEmissionsFlight } =
  //     flightProperties(offerRequest);

  //   setCheapestFlight(cheapestFlight);
  //   setFastestFlight(fastestFlight);
  //   setLowestEmissionsFlight(lowestEmissionsFlight);
  // }, []);

  // const fetchOfferRequest = useCallback(async () => {
  //   const data = await client.query("duffel.get-flight-offers", {
  //     ...params,
  //   });

  //   setOfferRequest(data);
  //   getFlightProperties(data);
  //   setLoading(false);
  // }, [getFlightProperties]);

  // useEffect(() => {
  //   fetchOfferRequest().catch(console.error);
  // }, [fetchOfferRequest]);

  return (
    <div className="h-full mt-52 items-center justify-center max-w-screen-2xl mx-auto flex ">
      <Spinner />
    </div>

    // <div className="max-w-sm  md:max-w-2xl lg:max-w-screen-2xl mx-auto">
    //   <div className="flex flex-col mx-auto items-center">
    //     <Typography variant="h1" component="h1" className="align-left pb-10">
    //       Flights
    //     </Typography>
    //     <Section
    //       textVariant="sm"
    //       textWeight="thin"
    //       className="text-gray-500 lg:max-w-screen-lg md:text-md lg:text-lg"
    //     >
    //       {loading ? "loading" : cheapestFlight?.total_amount}
    //     </Section>
    //     <SkeletonFlightCard />
    //   </div>

    //   {/* <div>{cabinClass}</div>
    // <div>{returnOffers}</div>
    // {slicesData.map((slice: any) => (
    //   <div key={slice.origin}>{slice.origin}</div>
    // ))} */}
    // </div>
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

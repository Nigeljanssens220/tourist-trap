import SkeletonFlightCard from "@/components/Card/SkeletonFlightCard";
import ThreeSectionCard from "@/components/Card/ThreeSectionCard";
import Section from "@/components/Section";
import Typography from "@/components/Typography";
import { trpc } from "@/utils/trpc";
import { GetServerSideProps } from "next";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

export default function Flights({
  returnOffers,
  slices,
  passengers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //@ts-ignore
  // const slicesData = JSON.parse(slices);
  // //@ts-ignore
  // const passengersData = JSON.parse(passengers);

  // console.log(returnOffers, slicesData, passengersData);
  // const { data, isLoading } = trpc.useQuery([
  //   "duffel.get-flight-offers",
  //   {
  //     return_offers: returnOffers,
  //     slices: slicesData,
  //     passengers: passengersData,
  //   },
  // ]);

  // if (data) {
  //   console.log(data);
  // }
  return (
    <div className='max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-screen-2xl mx-auto'>
      <div className='flex flex-col '>
        <ThreeSectionCard className='hidden lg:block' />
        <Typography variant='h1' component='h1' className='pb-10'>
          Flights
        </Typography>
        <Section
          textVariant='sm'
          textWeight='thin'
          className='text-gray-500 lg:max-w-screen-lg md:text-md lg:text-lg'
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
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      returnOffers: false,
      slices: query.slices,
      passengers: query.passengers,
    },
  };
};

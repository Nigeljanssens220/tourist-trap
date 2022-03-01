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
  const slicesData = JSON.parse(slices);
  //@ts-ignore
  const passengersData = JSON.parse(passengers);

  console.log(returnOffers, slicesData, passengersData);
  const { data, isLoading } = trpc.useQuery([
    "duffel.get-flight-offers",
    {
      return_offers: returnOffers,
      slices: slicesData,
      passengers: passengersData,
    },
  ]);

  if (data) {
    console.log(data);
  }
  return (
    <div className='flex flex-col justify-center items-center max-w-screen-2xl'>
      <Head>
        <title>Flights - Tourist Trap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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

import AddButton from "@/components/AddButton";
import FormTextField from "@/components/Form/FormTextField";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchFlight from "@/components/SearchFlightMUI";
// import SearchFlight from "@/components/SearchFlight";
import SubtractButton from "@/components/SubtractButton";
import { trpc } from "@/utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  // const { data, isLoading } = trpc.useQuery(["amadeus.get-location", "LON"]);
  // if (data) {
  //   console.log(data);
  // }

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (session) {
    return (
      <div className='max-w-screen-2xl mx-auto'>
        <>
          <button
            type='button'
            className='bg-blue-900'
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </>
        {/* <Head>
        <title>Skyscanner 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
        {/* <div>
        <FormTextField
          name='test'
          placeholder='hello'
          className='border border-red text-yellow bg-blue'
        />
        <FormTextField
          name='test'
          placeholder='hello'
          className='border border-red text-yellow bg-blue'
        />
      </div> */}

        {/* <Hero /> */}
        {/* <SearchFlight /> */}
        {/* <SearchFlight /> */}
        {/* <AddButton /> */}
        {/* <SubtractButton /> */}
        {/* <SearchFlight /> */}
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button type='button' onClick={() => signIn()}>
        Sign In
      </button>
    </>
  );
}

import AddButton from "@/components/AddButton";
import FormTextField from "@/components/Form/FormTextField";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SearchFlight from "@/components/SearchFlightMUI";
// import SearchFlight from "@/components/SearchFlight";
import SubtractButton from "@/components/SubtractButton";
import { trpc } from "@/utils/trpc";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  // const { data, isLoading } = trpc.useQuery(["amadeus.get-location", "LON"]);
  // if (data) {
  //   console.log(data);
  // }

  const { data: session, status } = useSession();

  return (
    <div className='flex flex-col mx-auto'>
      <Head>
        <title>Tourist Trap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=''>
        <NavBar />
      </div>
      <div className='relative w-full h-screen'>
        <Image
          className='absolute opacity-100 blur-sm'
          src='/hero.svg'
          alt='hero'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

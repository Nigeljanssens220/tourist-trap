import styles from "../styles/Home.module.css";

import AddButton from "@/components/AddButton";
import FormTextField from "@/components/Form/FormTextField";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
// import SearchFlight from "@/components/SearchFlight";
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
    <div className="">
      <Head>
        <title>Tourist Trap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
}

import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Tourist Trap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
}

import Hero from "@/components/Hero";
import FormSearchFlight from "@/components/Form/FormSearchFlight";
import Head from "next/head";
import Hero2 from "@/components/Hero/hero2";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-full max-w-screen-2xl mx-auto'>
      <Hero2 />
      {/* <div className='max-w-screen-2xl'>
        <FormSearchFlight href='/flights' />
      </div> */}
    </div>
  );
}

import SearchFlightForm from "@/components/Form";
import FormDateRangePicker from "@/components/Form/FormDateRangePicker";
import Hero from "@/components/Hero";
// import FormSearchFlight from "@/components/SearchFlightMUI";
import FormSearchFlight from "@/components/Form/SearchFlightForm";
import Head from "next/head";
import FormComboBox from "@/components/Form/FormComboBox";

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Head>
        <title>Tourist Trap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <div className='max-w-screen-2xl'>
        <FormSearchFlight />
      </div>
    </div>
  );
}

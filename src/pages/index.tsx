import SearchFlightForm from "@/components/Form";
import FormDateRangePicker from "@/components/Form/FormDateRangePicker";
import Hero from "@/components/Hero";
import FormSearchFlight from "@/components/SearchFlightMUI";
// import FormSearchFlight from "@/components/SearchFlightForm";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tourist Trap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero /> */}
      <FormSearchFlight />
    </div>
  );
}

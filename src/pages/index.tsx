import FormDateRangePicker from "@/components/Form/FormDateRangePicker";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tourist Trap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero /> */}
      <FormDateRangePicker />
    </div>
  );
}

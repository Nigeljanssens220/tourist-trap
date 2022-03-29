import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Head>
        <title>Tourist Trap</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default withTRPC({
  config() {
    return {
      url: "/api/trpc",
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);

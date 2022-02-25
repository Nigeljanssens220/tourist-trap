import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
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

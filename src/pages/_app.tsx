import "tailwindcss/tailwind.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "@/components/theme";
import { GlobalStyles } from "@mui/material";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: "#283D3B" },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
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

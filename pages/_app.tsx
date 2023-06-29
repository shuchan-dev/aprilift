import { AppProps } from "next/app";
import "../styles/global-styles.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Aprilift Mandiri</title>
        <meta
          name="description"
          content="Dumb waiter,cargo averting spare part /overhoul /repair spesialis lift Pembuatan dan Service Lift Passenger (Lift Penumpang)"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default App;

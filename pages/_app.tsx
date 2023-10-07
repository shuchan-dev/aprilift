import { AppProps } from "next/app";
import "../styles/global-styles.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const metaData = {
    title:
      "Aprilift Mandiri || Solusi Elevator: Dumbwaiter, Lift Barang, Lift Penumpang, dan Layanan Maintenance",
    description:
      "Kami adalah usaha yang bergerak di bidang produksi elevator, termasuk Dumbwaiter (Lift Makanan), Lift Barang (Lift Cargo), dan Lift Penumpang. Selain itu, kami menyediakan jasa maintenance dan penjualan spare parts lift. Percayakan pada kami untuk menyediakan produk dan jasa yang Anda butuhkan dalam bidang elevator.",
    image: "/home.png",
    openGraphImage: "/home.png",
    twitterImage: "/home.png",
    canonicalUrl: "https://aprilift.vercel.app/",
    robotsMeta: "index, follow",
  };

  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        {/* Opengraph tags */}
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.openGraphImage} />
        <meta property="og:type" content="website" />{" "}
        {/* Tipe halaman (website atau artikel) */}
        <meta property="og:url" content={metaData.canonicalUrl} />{" "}
        {/* URL halaman Anda */}
        {/* Twitter tags */}
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.twitterImage} />
        <meta name="twitter:card" content="summary_large_image" />{" "}
        {/* Jenis kartu Twitter */}
        {/* Canonical Tag */}
        <link rel="canonical" href={metaData.canonicalUrl} />
        {/* Robots Meta Tag */}
        <meta name="robots" content={metaData.robotsMeta} />
        <meta name="google-site-verification" content="EehtEWWpvTImaeCDXzbNL9VaosonuiL_IHMBs2_Ufds" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
        <Analytics />
      </QueryClientProvider>
    </>
  );
};

export default App;

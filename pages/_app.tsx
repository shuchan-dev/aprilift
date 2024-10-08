import { AppProps } from "next/app";
import "../styles/global-styles.css";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const metaData = {
    title:
      "PT.Aprilift Mandiri || Solusi Elevator: Dumbwaiter, Lift Barang, Lift Penumpang, dan Layanan Maintenance",
    description:
      "Kami adalah usaha yang bergerak di bidang produksi elevator, termasuk Dumbwaiter (Lift Makanan), Lift Barang (Lift Cargo), dan Lift Penumpang. Selain itu, kami menyediakan jasa maintenance dan penjualan spare parts lift. Percayakan pada kami untuk menyediakan produk dan jasa yang Anda butuhkan dalam bidang elevator.",
    image: "/home.png",
    openGraphImage: "/home.png",
    twitterImage: "/home.png",
    canonicalUrl: "https://aprilift.vercel.app/",
    robotsMeta: "index, follow",
  };

  useEffect(() => {
    // Kode Google Tag Manager
    const gtmScript = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=G-Y6XKB42FBQ'+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-Y6XKB42FBQ');
    `;
    const clarityScript = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "j867nic31h");
    `;
    const clarityScriptTag = document.createElement("script");
    clarityScriptTag.innerHTML = clarityScript;
    document.head.appendChild(clarityScriptTag);

    const script = document.createElement("script");
    script.innerHTML = gtmScript;
    document.head.appendChild(script);
  }, []);

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
        <meta
          name="google-site-verification"
          content="EehtEWWpvTImaeCDXzbNL9VaosonuiL_IHMBs2_Ufds"
        />
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

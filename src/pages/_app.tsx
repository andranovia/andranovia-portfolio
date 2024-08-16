import { ScrollProvider } from "@/contexts/ActiveSectionContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Andra's simple introduction website, blend of creativity and technical skill in web development."
        />
        <title>Andranovia - Portfolio</title>
      </Head>
      <ScrollProvider>
      <Component {...pageProps} />
      </ScrollProvider>
    </>
  );
}

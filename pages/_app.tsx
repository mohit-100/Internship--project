import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import  Header from "./Components/Header";
import {ThemeProvider} from "next-themes"

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <Fragment>
      <Head>
        <title>Internship</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* <ThemeProvider> */}
      <Header/>
      <Component className="dark:bg-gray-800" {...pageProps} />
      {/* </ThemeProvider> */}
    </Fragment>
  );
}

export default MyApp;
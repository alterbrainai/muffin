// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


// frontend/src/pages/_app.tsx

import { SessionProvider } from 'next-auth/react';
import { NextUIProvider } from '@nextui-org/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
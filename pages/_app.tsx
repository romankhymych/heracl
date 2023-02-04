import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
// import { Layout } from "@components/common";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      // theme={{ colorScheme: "dark" }}
    >
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </MantineProvider>
  );
}

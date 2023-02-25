import { Layout } from '@components/common';
import { MantineProvider } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </MantineProvider>
  );
}

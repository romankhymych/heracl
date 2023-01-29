import { MantineProvider } from "@mantine/core";
import { AppProps } from "next/app";
import { FC } from "react";
// import { Layout } from "@components/common";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    {/* <Layout> */}
    <Component {...pageProps} />
    {/* </Layout> */}
  </MantineProvider>
);

export default App;

import { FC } from "react";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Component {...pageProps} />
  </MantineProvider>
);

export default App;

import { extendTheme, VechaiProvider } from "@vechaiui/react";
import "../styles/globals.css";
import { bee, cool, dawn, light, midnight, pale } from "themes/index";
import Layout from "components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    cursor: "pointer",
    colorSchemes: {
      bee,
      cool,
      dawn,
      light,
      midnight,
      pale,
    },
  });
  return (
    <VechaiProvider density="compact" theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VechaiProvider>
  );
}

export default MyApp;

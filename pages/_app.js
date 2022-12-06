import { extendTheme, VechaiProvider } from "@vechaiui/react";
import { bee, cool, dawn, light, midnight, pale } from "themes/index";
import Layout from "components/Layout/Layout";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState('bee')
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

  useEffect(() => {
    const colorScheme = localStorage.getItem("theme");
    if(colorScheme){
      setColor(colorScheme);
    }
  }, [])
  
  return (
    <VechaiProvider density="compact" theme={theme} colorScheme={color}>
      <Layout setColor={setColor}>
        <Component {...pageProps} />
      </Layout>
    </VechaiProvider>
  );
}

export default MyApp;

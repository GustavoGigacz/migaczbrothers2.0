import type { AppProps } from "next/app";
import GlobalStyle from "@/components/shared/globalStyles";
import CssVariables from "@/components/shared/variables";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssVariables />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

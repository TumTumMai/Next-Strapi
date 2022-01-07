import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}
export default MyApp;
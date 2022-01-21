import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";
import "../../styles/Global.css";
import AuthContextProvider from "stores/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}
export default MyApp;

import { HeadComponent } from "../Component/head";
import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-[#FAFAFC]">
        <CookiesProvider>
          <HeadComponent />

          <Component {...pageProps} />
        </CookiesProvider>
      </div>
    </>
  );
}

export default MyApp;

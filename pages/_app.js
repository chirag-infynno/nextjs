import HeadComponent from "../Component/Head";
import "../styles/globals.css";
// import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import { wrapper } from "./../redux/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-[#FAFAFC]">
        {/* <CookiesProvider> */}

        {/* <Hea */}
        <HeadComponent />

        <Component {...pageProps} />
        {/* </CookiesProvider> */}
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);

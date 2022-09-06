import HeadComponent from "../Component/Head";
import "../styles/globals.css";
// import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import { wrapper } from "./../redux/store/store";
import { Provider } from "react-redux";

import { store } from "./../redux/store/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="max-w-[1440px] mx-auto bg-[#FAFAFC]">
        <HeadComponent />

        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

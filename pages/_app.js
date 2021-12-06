import { Provider } from "react-redux";
import store from "../Redux/store/store";
import { Global } from "./../Utils/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Global />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

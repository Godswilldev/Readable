import { Provider } from "react-redux";
import TransitionLayout from "../Components/Transition/PageTransition";
import store from "../Redux/store/store";
import { Global } from "./../Utils/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Provider store={store}>
        <Global />
        <Component {...pageProps} />
      </Provider>
    </TransitionLayout>
  );
}

export default MyApp;

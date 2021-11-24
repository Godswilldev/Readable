import { Provider } from "react-redux";
import store from "../Redux/store/store";
import { Global } from "./../Utils/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Utils/Theme";

function MyApp({ Component, pageProps }) {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={store.getState().ThemeReducer.darkMode ? darkTheme : lightTheme}
      >
        <Global
          theme={
            store.getState().ThemeReducer.darkMode ? darkTheme : lightTheme
          }
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

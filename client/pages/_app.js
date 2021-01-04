import "../styles/globals.css";
import wrapper from "../common/configureStore";
import "antd/dist/antd.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);

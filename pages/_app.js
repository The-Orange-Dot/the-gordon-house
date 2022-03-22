import NavBar from "../components/NavBar";
import "../styles/globals.css";
import MediaQuery from "react-responsive";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MediaQuery minWidth={900}>
        <NavBar />
      </MediaQuery>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

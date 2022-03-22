import Head from "next/head";
import Image from "next/image";
import PropertyNavigation from "../components/PropertyNavigation";
import PropertyNavigationMobile from "../components/PropertyNavigationMobile";
import PropertyNavigationTablet from "../components/PropertyNavigationTablet";
import styles from "../styles/Home.module.css";
import MediaQuery from "react-responsive/";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Gordon House</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image
            src={require("../images/homepage.jpg")}
            alt="Hampton Bays Water"
          />
        </div>
        <div>
          <MediaQuery minWidth={900}>
            <PropertyNavigation />
          </MediaQuery>
        </div>
        <div>
          <MediaQuery minWidth={450} maxWidth={899}>
            <PropertyNavigationTablet />
          </MediaQuery>
        </div>
        <div>
          <MediaQuery maxWidth={449}>
            <PropertyNavigationMobile />
          </MediaQuery>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

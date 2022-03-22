import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navBarContainer}>
        <Link href={"/"} passHref={true}>
          <h2 className={styles.link}>The Gordon House</h2>
        </Link>
        <div className={styles.navLinkContainer}>
          <Link href={"/"} passHref={true}>
            <p className={styles.link}>Home</p>
          </Link>
          <Link href={"/contact"} passHref={true}>
            <p className={styles.link}>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

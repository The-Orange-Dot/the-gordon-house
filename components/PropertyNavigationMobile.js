import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/PropertyNavigation.module.css";

//Screen = minWidth 900px
//Tablet = minWidth 450px
//Mobile = maxWidth 449px

const PropertyNavigation = () => {
  return (
    <div className={styles.propertiesContainerMobile}>
      <h1>The Hamptons</h1>
      <div className={styles.locationContainerMobile}>
        {/* EDGEWOOD */}
        <div className={styles.propertyMobile}>
          <h3>Edgewood</h3>
          <Link href={"/properties/edgewood"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/EDGEWOOD/edgewood-main.jpg")}
                  alt="Edgewood main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>4 BEDROOMS, 3 ½ BATHS</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Sag Harbor Village */}
        <div className={styles.propertyMobile}>
          <h3>Sag Harbor Village</h3>
          <Link href={"/properties/sag-harbor-village"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/SAG-HARBOR/sag-harbor-village-main.jpg")}
                  alt="Sag Harbor main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>4 BEDROOMS, 3 ½ BATHS</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Stephen Hands */}
        <div className={styles.propertyMobile}>
          <h3>Stephen Hands</h3>
          <Link href={"/properties/stephen-hands"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/STEPHEN-HANDS/stephen-hands-main.jpg")}
                  alt="Stephen Hands main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>3 BEDROOMS, 2 BATHS</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Rosehill */}
        <div className={styles.propertyMobile}>
          <h3>Rosehill</h3>
          <Link href={"/properties/rosehill"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ROSEHILL/rosehill-main.jpg")}
                  alt="Rosehill main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>3 BEDROOMS, 2 BATHS</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Elywood */}
        <div className={styles.propertyMobile}>
          <h3>ElyWood</h3>
          <Link href={"/properties/elybrook"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ELYBROOK/elybrook-main.jpg")}
                  alt="Elybrook main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>4 BEDROOMS, 3½ BATHS</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Copeces */}
        <div className={styles.propertyMobile}>
          <h3>116 Copeces</h3>
          <Link href={"/properties/copeces"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/COPECES/copeces-main.jpg")}
                  alt="COPECES main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>2 BEDROOMS, 1 BATH</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <h1>Maryland</h1>
      <div className={styles.locationContainer}>
        <div className={styles.propertyMobile}>
          <h3>Rockville</h3>
          <Link href={"/properties/rockville"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ROCKVILLE/rockville-main.jpg")}
                  alt="rockville main"
                />
              </div>
              <p>800 sq. ft. 1 Bedroom, 1 Bath Apartments</p>
            </div>
          </Link>
        </div>
      </div>

      <h1>The Caribbeans</h1>
      <div className={styles.locationContainer}>
        <div className={styles.propertyMobile}>
          <h3>Antigua</h3>
          <Link href={"/properties/antigua"} passHref={true}>
            <div className={styles.propertyCardContainerMobile}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ANTIGUA/antigua-main.jpg")}
                  alt="antigua main"
                />
              </div>
              <p>4 BEDROOM, 3 BATHROOM VILLA</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyNavigation;

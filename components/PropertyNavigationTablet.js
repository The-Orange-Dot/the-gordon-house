import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/PropertyNavigation.module.css";

//Screen = minWidth 900px
//Tablet = minWidth 450px
//Mobile = maxWidth 449px

const PropertyNavigation = () => {
  return (
    <div className={styles.propertiesContainer}>
      <h1>The Hamptons</h1>
      <div className={styles.locationContainer}>
        {/* EDGEWOOD */}
        <div className={styles.property}>
          <h3>Edgewood</h3>
          <Link href={"/edgewood"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/EDGEWOOD/edgewood-main.jpg")}
                  alt="Edgewood main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  4 BEDROOMS, 3 ½ BATHS, HEATED GUNITE POOL & SPA, A.C, FULLY
                  FURNISHED
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Sag Harbor Village */}
        <div className={styles.property}>
          <h3>Sag Harbor Village</h3>
          <Link href={"/sag-harbor-village"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/SAG-HARBOR/sag-harbor-village-main.jpg")}
                  alt="Sag Harbor main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  4 BEDROOMS, 3 ½ BATHS, HEATED GUNITE POOL & SPA, A.C, FULLY
                  FURNISHED
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Stephen Hands */}
        <div className={styles.property}>
          <h3>Stephen Hands</h3>
          <Link href={"/stephen-hands"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/STEPHEN-HANDS/stephen-hands-main.jpg")}
                  alt="Stephen Hands main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  3 BEDROOMS, 2 BATHS, OIL HEAT, UNFURNISHED, ALL APPLIANCES,
                  20'X40' HEATED VINYL POOL
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Rosehill */}
        <div className={styles.property}>
          <h3>Rosehill</h3>
          <Link href={"/rosehill"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ROSEHILL/rosehill-main.jpg")}
                  alt="Rosehill main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  3 BEDROOMS, 2 BATHS, OIL HEAT, UNFURNISHED, ALL APPLIANCES,
                  20'X40' HEATED VINYL POOL
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Elywood */}
        <div className={styles.property}>
          <h3>ElyWood</h3>
          <Link href={"/elybrook"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ELYBROOK/elybrook-main.jpg")}
                  alt="Elybrook main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  4 BEDROOMS, 3½ BATHS, 18'x44' HEATED GUNITE POOL & SPA A.C.,
                  OIL HEAT, FULLY FURNISHED
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Copeces */}
        <div className={styles.property}>
          <h3>116 Copeces</h3>
          <Link href={"/copeces"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/COPECES/copeces-main.jpg")}
                  alt="COPECES main"
                />
              </div>
              <div className={styles.textContainer}>
                <p>
                  2 BEDROOMS, 1 BATH, VINYL POOL, ALL APPLIANCES, OIL HEAT,
                  UNFURNISHED
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <h1>Maryland</h1>
      <div className={styles.locationContainer}>
        <div className={styles.property}>
          <h3>Rockville</h3>
          <Link href={"/rockville"} passHref={true}>
            <div className={styles.propertyCardContainer}>
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
        <div className={styles.property}>
          <h3>Antigua</h3>
          <Link href={"/antigua"} passHref={true}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.image}>
                <Image
                  src={require("../images/ANTIGUA/antigua-main.jpg")}
                  alt="antigua main"
                />
              </div>
              <p>4 BEDROOM, 3 BATHROOM VILLA (More info needed)</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyNavigation;

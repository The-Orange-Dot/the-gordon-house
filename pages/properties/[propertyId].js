import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/property.module.css";
import images from "/public/images/default";
import { useRouter } from "next/router";

const PropertyId = () => {
  const [properties, setProperties] = useState({
    name: "",
    images: images,
    description: [],
  });
  const [selector, setSelector] = useState("details");
  const [picture, setPicture] = useState(properties.images[0]);
  const router = useRouter();

  const imageTest = properties.images[0];

  useEffect(() => {
    const fetchProps = async () => {
      const res = await fetch(`../api/${router.query.propertyId}`);
      const data = await res.json();
      setProperties(data);
      setPicture(data.images[0]);
    };

    fetchProps();
  }, [router.query.propertyId]);

  console.log(picture);

  return (
    <div className={styles.propertyPageContainer}>
      <div className={styles.propertyInfoContainer}>
        <h1>
          {properties.name.slice(0, 1).toUpperCase() + properties.name.slice(1)}
        </h1>
        <div className={styles.imageContainer}>
          <div className={styles.imageDisplay}>
            <Image
              src={picture}
              alt={properties.name}
              width={550}
              height={297}
            />
          </div>
          <div className={styles.imagePreview}>
            {properties.images.map((image) => {
              console.log(image);
              return (
                <Image
                  key={image.src}
                  src={image}
                  alt="image"
                  width={40}
                  height={40}
                  onClick={() => {
                    setPicture(image);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.selector}>
          <p
            onClick={() => {
              setSelector("details");
            }}
            className={
              selector === "details" ? styles.selected : styles.unselected
            }
          >
            Details
          </p>
          <p
            onClick={() => {
              setSelector("ameneties");
            }}
            className={
              selector === "ameneties" ? styles.selected : styles.unselected
            }
          >
            Ameneties
          </p>
          <p
            onClick={() => {
              setSelector("contact");
            }}
            className={
              selector === "contact" ? styles.selected : styles.unselected
            }
          >
            Contact
          </p>
        </div>
        {selector === "details" ? (
          <div className={styles.detailsContainer}>
            {properties.description.map((text) => {
              return <p key={text.length}>{text}</p>;
            })}
          </div>
        ) : null}
        {selector === "ameneties" ? (
          <div className={styles.detailsContainer}>
            <h3>Ameneties</h3>
            <ul>
              <li>4 bedrooms</li>
              <li>3 1/2 baths</li>
              <li>Heated Gunite Pool</li>
              <li>Spa</li>
              <li>A.C.</li>
              <li>Fully Furnished</li>
            </ul>
          </div>
        ) : null}

        {selector === "contact" ? (
          <div className={styles.detailsContainer}>
            <div className={styles.contactContainer}>
              <div className={styles.gregImage}>
                <Image
                  src={require("/public/images/greg.jpeg")}
                  alt="Greg Gordon"
                />
              </div>
              <div>
                <h3>Greg Gordon</h3>
                <h4>P.O BOX 1188</h4>
                <h4>EAST HAMPTON, NY</h4>
                <h4>11937</h4>
                <p>PH: 631-329-0111</p>
                <p>gregorygordon495 @gmail.com</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div>
        <iframe
          src={properties.map}
          width="500"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyId;

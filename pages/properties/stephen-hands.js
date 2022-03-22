import Image from "next/image";
import React, { useEffect, useState } from "react";
import thumbnail from "../../images/EDGEWOOD/edgewood-main.jpg";
import styles from "../../styles/property.module.css";
import images from "../../images/STEPHEN-HANDS/stephenHands";

const StephenHands = () => {
  const [properties, setProperties] = useState({
    name: "",
    images: [],
  });
  const [selector, setSelector] = useState("details");
  const [picture, setPicture] = useState(images[0]);

  const fetchProps = async () => {
    const res = await fetch("../api/");
    const data = await res.json();
    setProperties(data[2]);
  };

  useEffect(() => {
    fetchProps();
  }, []);

  return (
    <div className={styles.propertyPageContainer}>
      <div className={styles.propertyInfoContainer}>
        <h1>
          {properties.name.slice(0, 1).toUpperCase() + properties.name.slice(1)}
        </h1>
        <div className={styles.imageContainer}>
          <div className={styles.imageDisplay}>
            <Image src={picture} alt={properties.name} />
          </div>
          <div className={styles.imagePreview}>
            {images.map((image) => {
              return (
                <Image
                  key={image.src}
                  src={image}
                  alt="image"
                  width={40}
                  height={40}
                  objectFit="cover"
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
          >
            Details
          </p>
          <p
            onClick={() => {
              setSelector("ameneties");
            }}
          >
            Ameneties
          </p>
        </div>
        {selector === "details" ? (
          <div className={styles.detailsContainer}>
            <p>
              This charming 4 bedroom, 3 ½ bath home is snuggled in the private
              community of The Ludlow Greens Association in Bridgehampton, New
              York. It is spacious and boasts a large living and dining area
              along with a fully equipped eat-in kitchen. For your comfort,
              there is central air conditioning and an oil fired heating system.
              The house, with a heated 18’ x 44’ gunite swimming pool and gunite
              spa, is surrounded by heavily landscaped shrubbery and a protected
              wooded area for your privacy. The large deck provides for
              sunbathing around the pool and peaceful outdoor dining.
            </p>
            <p>
              The residence is idyllically located to the villages of
              Southampton, Sag Harbor, and East Hampton. It is a short walk to
              the Bridgehampton Train Station, The Hampton Jitney pickup
              location and the quaint Village of Bridgehampton. The
              Bridgehampton Shopping Plaza will provide you with all your
              necessities and is a five minute drive from the house. For the
              beach lover, a 15 minute bike ride (5 minutes by car) will take
              you to several of the most beautiful ocean beaches on the east
              end.
            </p>
            <p>
              The historic whaling village of Sag Harbor (10 minutes by car) has
              unique shopping and a large picturesque harbor. Sailing, charter
              fishing, and waterside dining are all readily available. Public
              golf is available and can be scheduled at several locations. In
              choosing this lovely home and spending time in any of the charming
              villages with all they have to offer you will find the relaxed
              sophistication you seek by spending your time on the beautiful
              east end of Long Island.
            </p>
          </div>
        ) : (
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
        )}
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

export default StephenHands;

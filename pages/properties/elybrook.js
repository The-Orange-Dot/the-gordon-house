import React from "react";
import Image from "next/image";

const Elybrook = () => {
  return (
    <div className={styles.propertyPageContainer}>
      <div>
        <Image
          src={require("../../images/ELYBROOK/elybrook-1.jpeg")}
          alt="Elybrook main"
        />
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.1814559575296!2d-72.21316763088879!3d41.01967614319741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8a4ea9e8d62b5%3A0xc2c908eb2072436f!2s3%20Ely%20Brook%20Rd%2C%20East%20Hampton%2C%20NY%2011937%2C%20USA!5e0!3m2!1sen!2sjp!4v1647849738306!5m2!1sen!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Elybrook;

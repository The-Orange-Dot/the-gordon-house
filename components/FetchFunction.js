import React, { useState, useEffect } from "react";

export const FetchFunction = (id) => {
  const [properties, setProperties] = useState([]);

  const fetchProps = async () => {
    const res = await fetch("../api/");
    const data = await res.json();
    setProperties(data);
  };

  useEffect(() => {
    fetchProps();
  }, []);

  return properties[id];
};

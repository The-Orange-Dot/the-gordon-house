import React from "react";

const PropertyFetch = (id) => {
  const fetchComments = async () => {
    const res = await fetch("../api/");
    const data = await res.json();
    setProperties(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return <div>PropertyFetch</div>;
};

export default PropertyFetch;

import React, { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setServices] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data =" + err);
      });
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [services, setServices] = useState([]);
  let mappint = {};
  let { serviceId } = useParams();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/genius-car-service-auth-module-61/main/public/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data =" + err);
      });
  }, [serviceId]);

  for (const service of services) {
    if (service.id === parseInt(serviceId)) {
      mappint = service;
    }
  }

  return (
    <div>
      <h2 className="text-center">More details about: {mappint.name}</h2>
      <div className="service">
        <img height={400} className="w-100" src={mappint.img} alt="" />
        <h2>{mappint.name}</h2>
        <p>Price: {mappint.price}$</p>
        <p>
          <small>{mappint.description}</small>
        </p>
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

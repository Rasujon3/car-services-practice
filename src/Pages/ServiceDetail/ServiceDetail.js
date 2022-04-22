import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const [services, setServices] = useState({});
  let { serviceId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data =" + err);
      });
  }, [serviceId]);

  return (
    <div>
      <h2 className="text-center">More details about: {services.name}</h2>
      <div className="service">
        <img height={400} className="w-100" src={services.img} alt="" />
        <h2>{services.name}</h2>
        <p>Price: {services.price}$</p>
        <p>
          <small>{services.description}</small>
        </p>
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

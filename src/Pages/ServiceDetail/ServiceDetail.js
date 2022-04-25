import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetail = () => {
  let { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  return (
    <div>
      <h2 className="text-center">More details about: {service.name}</h2>
      <div className="service">
        <img height={400} className="w-100" src={service.img} alt="" />
        <h2>{service.name}</h2>
        <p>Price: {service.price}$</p>
        <p>
          <small>{service.description}</small>
        </p>
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

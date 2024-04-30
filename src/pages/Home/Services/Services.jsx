import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="mb-20 mt-40">
      <div className="flex justify-center text-center items-center flex-col">
        <h1 className="text-[#FF3811] font-semibold text-lg py-2 font-inter">
          Service
        </h1>
        <h1 className="font-inter font-semibold text-4xl py-2">
          Our Service Area
        </h1>
        <p className="font-inter text-[#737373] max-w-2xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

import { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
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
      <div className="flex justify-center items-center">
        <a
          
          className="relative px-5 py-3 overflow-hidden font-medium text-[#FF3811] bg-white border-2 border-[#FF3811] rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-[#FF3811] group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-[#FF3811] group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#FF3811] group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all  duration-300 delay-200 bg-[#FF3811] group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#FF3811] rounded-lg opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          More Services
          </span>
        </a>
      </div>
    </div>
  );
};

export default Services;

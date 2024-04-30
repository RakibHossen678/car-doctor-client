import { FaArrowRight } from "react-icons/fa";


const ServiceCard = ({service}) => {
    const {title,img,price}=service
  return (
    <div className="max-w-md p-4 rounded-md border-2 ">
      <img
        src={img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        
        <h2 className="text-2xl font-semibold font-inter text-[#444444] tracking-wide">
          {title}
        </h2>
      </div>
      <div className="flex justify-between items-center py-3">
        <h1 className="text-[#FF3811] font-inter font-medium text-lg">
            <span>Price : </span>
            <span>${price}</span>
        </h1>
        <h1><FaArrowRight className="text-lg text-[#FF3811]"/></h1>
      </div>
    </div>
  );
};

export default ServiceCard;

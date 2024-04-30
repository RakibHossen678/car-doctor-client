import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex justify-between items-center rounded-lg my-10 bg-[#151515] text-white px-20 py-16">
      <div className="flex items-center space-x-4">
        <span>
          <HiOutlineBuildingOffice2 className="text-4xl text-[#FF3811]" />
        </span>
        <span className="space-y-2">
          <h1 className="font-inter text-sm">We are open monday-friday</h1>
          <h1 className="font-inter font-bold text-2xl">7:00 am - 9:00 pm</h1>
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>
          <IoCall className="text-4xl text-[#FF3811]" />
        </span>
        <span className="space-y-2">
          <h1 className="font-inter text-sm">Have a question?</h1>
          <h1 className="font-inter font-bold text-2xl">+2546 251 2658</h1>
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span>
          <FaLocationDot className="text-4xl text-[#FF3811]" />
        </span>
        <span className="space-y-2">
          <h1 className="font-inter text-sm">Need a repair? our address</h1>
          <h1 className="font-inter font-bold text-2xl">
            Liza Street, New York
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Contact;

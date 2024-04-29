import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img1 from "../../../assets/images/homeCarousel/1.jpg";
import img2 from "../../../assets/images/homeCarousel/2.jpg";
import img3 from "../../../assets/images/homeCarousel/3.jpg";
import img4 from "../../../assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[600px] my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full z-1  rounded-lg bg-cover bg-center object-cover"
        />
        <div className="absolute overflow-hidden rounded-lg h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]    text-white flex flex-col justify-center  ">
          <div className="w-[460px] absolute transform -translate-y-1/2 top-1/2 left-32">
            <h1 className="text-6xl font-inter font-semibold leading-[70px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-inter py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center space-x-7">
              <a className="relative px-8 py-3 font-medium text-white transition duration-300 bg-[#FF3811] rounded-md hover:bg- ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="relative">Discover More</span>
              </a>
              <a
                href="#_"
                className="px-5 py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2 text-white hover:border-none inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Latest Project
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-14 bottom-4 space-x-9">
          <a
            href="#slide4"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowLeftLong className="text-white text-lg hover:text-black" />
          </a>
          <a
            href="#slide2"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowRightLong className="text-white text-lg hover:text-black" />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-lg bg-cover bg-center object-cover"
        />
        <div className="absolute overflow-hidden rounded-lg h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]    text-white flex flex-col justify-center  ">
          <div className="w-[460px] absolute transform -translate-y-1/2 top-1/2 left-32">
            <h1 className="text-6xl font-inter font-semibold leading-[70px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-inter py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center space-x-7">
              <a className="relative px-8 py-3 font-medium text-white transition duration-300 bg-[#FF3811] rounded-md hover:bg- ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="relative">Discover More</span>
              </a>
              <a
                href="#_"
                className="px-5 py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2 text-white hover:border-none inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Latest Project
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-14 bottom-4 space-x-9">
          <a
            href="#slide1"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowLeftLong className="text-white text-lg hover:text-black" />
          </a>
          <a
            href="#slide3"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowRightLong className="text-white text-lg hover:text-black" />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-lg bg-cover bg-center object-cover"
        />
        <div className="absolute overflow-hidden rounded-lg h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]    text-white flex flex-col justify-center  ">
          <div className="w-[460px] absolute transform -translate-y-1/2 top-1/2 left-32">
            <h1 className="text-6xl font-inter font-semibold leading-[70px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-inter py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center space-x-7">
              <a className="relative px-8 py-3 font-medium text-white transition duration-300 bg-[#FF3811] rounded-md hover:bg- ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="relative">Discover More</span>
              </a>
              <a
                href="#_"
                className="px-5 py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2 text-white hover:border-none inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Latest Project
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-14 bottom-4 space-x-9">
          <a
            href="#slide2"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowLeftLong className="text-white text-lg hover:text-black" />
          </a>
          <a
            href="#slide4"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowRightLong className="text-white text-lg hover:text-black" />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full  overflow-hidden rounded-lg bg-cover bg-center object-cover"
        />
        <div className="absolute overflow-hidden rounded-lg h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]    text-white flex flex-col justify-center  ">
          <div className="w-[460px] absolute transform -translate-y-1/2 top-1/2 left-32">
            <h1 className="text-6xl font-inter font-semibold leading-[70px]">
              Affordable Price For Car Servicing
            </h1>
            <p className="font-inter py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex items-center space-x-7">
              <a className="relative px-8 py-3 font-medium text-white transition duration-300 bg-[#FF3811] rounded-md hover:bg- ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="relative">Discover More</span>
              </a>
              <a
                href="#_"
                className="px-5 py-2.5 hover:py-3 relative rounded group overflow-hidden font-medium bg-transparent border-2 text-white hover:border-none inline-block"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#FF3811] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Latest Project
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-14 bottom-4 space-x-9">
          <a
            href="#slide3"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowLeftLong className="text-white text-lg hover:text-black" />
          </a>
          <a
            href="#slide1"
            className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle"
          >
            <FaArrowRightLong className="text-white text-lg hover:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

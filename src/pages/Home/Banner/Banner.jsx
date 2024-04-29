import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[585px] my-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={img1}
          className="w-full rounded-lg bg-cover bg-center object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
          <FaArrowLeftLong className="text-white text-lg hover:text-black"/>
          </a>
          <a href="#slide2" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
            <FaArrowRightLong  className="text-white text-lg hover:text-black"/>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={img2}
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
          <FaArrowLeftLong  className="text-white text-lg hover:text-black"/>
          </a>
          <a href="#slide3" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
            <FaArrowRightLong  className="text-white text-lg hover:text-black"/>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={img3}
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
            <FaArrowLeftLong  className="text-white text-lg hover:text-black"/>
          </a>
          <a href="#slide4" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
            <FaArrowRightLong  className="text-white text-lg hover:text-black"/>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={img4}
          className="w-full rounded-lg"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
          <FaArrowLeftLong  className="text-white text-lg hover:text-black"/>
          </a>
          <a href="#slide1" className="btn border-none hover:bg-[#dad3d3f7] bg-[#FF3811] btn-circle">
            <FaArrowRightLong  className="text-white text-lg hover:text-black"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

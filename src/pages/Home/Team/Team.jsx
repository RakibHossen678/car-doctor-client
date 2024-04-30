import { FaFacebook, FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { AiFillTwitterCircle } from 'react-icons/ai';
const Team = () => {
  return (
    <div className="my-20">
      <div className="flex justify-center text-center items-center flex-col mb-5">
        <h1 className="text-[#FF3811] font-semibold text-lg py-2 font-inter">
          Team
        </h1>
        <h1 className="font-inter font-semibold text-4xl py-2">
          Meet Our Team
        </h1>
        <p className="font-inter text-[#737373] max-w-2xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div>
        <div className="carousel carousel-center space-x-7 rounded-box">
          <div className="carousel-item">
            <div className="max-w-sm p-6 rounded-2xl border-2">
              <img
                src={team1}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="mt-6 mb-2 text-center">
                
                <h2 className="text-xl font-semibold tracking-wide">
                Car Engine Plug
                </h2>
              <p className="py-2">
              Engine Expert
              </p>
              <div className='flex space-x-4 py-3 justify-center items-center'>
                <h1><FaFacebook className='text-2xl text-[#395185]'/></h1>
                <h1><AiFillTwitterCircle className='text-2xl text-[#55ACEE]' /></h1>
                <h1><FaLinkedin className='text-2xl text-[#0A66C2]'/></h1>
                <h1><FaSquareInstagram className='text-2xl '/></h1>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="max-w-sm p-6 rounded-2xl border-2">
              <img
                src={team2}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
               <div className="mt-6 mb-2 text-center">
                
                <h2 className="text-xl font-semibold tracking-wide">
                Car Engine Plug
                </h2>
              <p className="py-2">
              Engine Expert
              </p>
              <div className='flex space-x-4 py-3 justify-center items-center'>
                <h1><FaFacebook className='text-2xl text-[#395185]'/></h1>
                <h1><AiFillTwitterCircle className='text-2xl text-[#55ACEE]' /></h1>
                <h1><FaLinkedin className='text-2xl text-[#0A66C2]'/></h1>
                <h1><FaSquareInstagram className='text-2xl '/></h1>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="max-w-sm p-6 rounded-2xl border-2">
              <img
                src={team3}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
               <div className="mt-6 mb-2 text-center">
                
                <h2 className="text-xl font-semibold tracking-wide">
                Car Engine Plug
                </h2>
              <p className="py-2">
              Engine Expert
              </p>
              <div className='flex space-x-4 py-3 justify-center items-center'>
                <h1><FaFacebook className='text-2xl text-[#395185]'/></h1>
                <h1><AiFillTwitterCircle className='text-2xl text-[#55ACEE]' /></h1>
                <h1><FaLinkedin className='text-2xl text-[#0A66C2]'/></h1>
                <h1><FaSquareInstagram className='text-2xl '/></h1>
              </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <div className="max-w-sm p-6 rounded-2xl border-2">
              <img
                src={team1}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
               <div className="mt-6 mb-2 text-center">
                
                <h2 className="text-xl font-semibold tracking-wide">
                Car Engine Plug
                </h2>
              <p className="py-2">
              Engine Expert
              </p>
              <div className='flex space-x-4 py-3 justify-center items-center'>
                <h1><FaFacebook className='text-2xl text-[#395185]'/></h1>
                <h1><AiFillTwitterCircle className='text-2xl text-[#55ACEE]' /></h1>
                <h1><FaLinkedin className='text-2xl text-[#0A66C2]'/></h1>
                <h1><FaSquareInstagram className='text-2xl '/></h1>
              </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Team;

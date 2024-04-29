import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div className="hero h-[500px]  my-24">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>

        <img
          src={person}
          className="w-3/4 h-[500px] object-cover rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 h-[300px] object-cover border-[10px] border-white absolute right-5 top-1/2 rounded-lg shadow-2xl"
        />
        </div>
        <div className='lg:w-1/2'>
          <h1 className="text-[#FF3811] font-inter font-semibold py-3">About Us</h1>
          <h1 className="text-5xl font-semibold max-w-sm leading-[54px] font-inter">We are qualified & of experience in this field</h1>
          <p className="font-inter font-medium text-[#737373] py-5">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="font-inter font-medium text-[#737373] py-5">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <a className="relative px-8 py-3 font-medium text-white transition duration-300 bg-[#FF3811] rounded-md hover:bg- ease">
                <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3"></span>
                <span className="relative">Get More Info</span>
              </a>
        </div>
      </div>
    </div>
  );
};

export default About;

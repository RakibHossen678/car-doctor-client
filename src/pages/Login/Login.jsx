import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import loginImg from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault()
    }
  return (
    <div className="my-20 flex lg:flex-row flex-col justify-between items-center">
      <div className="lg:w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="lg:w-1/2 w-full px-3 lg:px-0">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2">
          <h1 className="text-2xl font-bold text-center">Sing Up</h1>
          <form onSubmit={handleLogin}  className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-black font-inter font-medium ">
               Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md border-2 outline-none"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-black font-inter font-medium ">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="w-full px-4 py-3 rounded-md border-2"
              />
              
            </div>
            <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-[#FF3811]">
            Sign up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-[#444444] font-inter ">
            Or Sign In with
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-3">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
            <CiFacebook className="text-3xl font-semibold text-[#3B5998]" />
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
            <FaLinkedinIn className="text-2xl font-semibold text-[#0A66C2]"/>
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <FcGoogle className="text-2xl font-semibold"/>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-[#444444] font-inter font-medium">
            Don't have an account?
            <Link to='/signUp'
              
              className="underline text-[#FF3811] "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

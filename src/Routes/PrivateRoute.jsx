import { useContext } from "react";
import { Navigate ,useLocation} from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import loadingImg from '../assets/loading.json' 
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location=useLocation()
  console.log(location)
  console.log(location)
  if (loading) {
    return (
      <div className="w-28">
        <Lottie animationData={loadingImg}></Lottie>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;

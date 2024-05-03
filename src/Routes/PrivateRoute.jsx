import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <div>
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>;
  }
  if (user?.email) {
    return children;
  }
//   return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRouteElement = ({ element }) => {
  const isAuthorization = useSelector(state => state.userReducer.isAuthorization)
  const location = useLocation();

  return (
    isAuthorization
      ? (element)
      : (<Navigate  to='/login' state={{ from: location }} />)
  )
}

export default ProtectedRouteElement;

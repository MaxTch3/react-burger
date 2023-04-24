import { Navigate, useLocation } from "react-router-dom";
import { useSelectorApp } from "../burger-constructor/burger-constructor";
import { FC } from "react";


type TProtectedRouteElementProps = {
  element: any
}

const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ element }) => {
  const isAuthorization = useSelectorApp(state => state.userReducer.isAuthorization)
  const location = useLocation();

  return (
    isAuthorization
      ? (element)
      : (<Navigate to='/login' state={{ from: location }} />)
  )
}

export default ProtectedRouteElement;

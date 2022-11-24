import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { selectAuthUser } from "../redux/selectors/authSelectors";

const RequireAuth = () => {
  const authUser = useSelector(selectAuthUser);
  const location = useLocation();

  return authUser ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default RequireAuth;

import { Navigate, Outlet } from "react-router";
import { useAuth } from "../features/auth/context/auth-context";
import { homePath } from "./paths";

export default function GuestRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={homePath()} replace />;
  }

  return <Outlet />;
}

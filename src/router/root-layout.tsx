import { Outlet } from "react-router";
import { AuthProvider } from "../features/auth/context/auth-context";

const RootLayout = () => (
  <AuthProvider>
    <Outlet />
  </AuthProvider>
);

export default RootLayout;

import { createBrowserRouter } from "react-router";
import DashboardLayout from "../dashboard-layout";
import {
  Error,
  Home,
  NotFound,
  SignIn,
  SignUp,
  User,
  UserEdit,
  Users,
} from "../pages";
import { signInPath, signUpPath, usersPath } from "./paths";
import ProtectedRoute from "./protected-route";
import RootLayout from "./root-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: signInPath(), element: <SignIn /> },
      { path: signUpPath(), element: <SignUp /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { index: true, element: <Home /> },
              { path: usersPath(), element: <Users /> },
              { path: `${usersPath()}/:userId`, element: <User /> },
              { path: `${usersPath()}/:userId/edit`, element: <UserEdit /> },
            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

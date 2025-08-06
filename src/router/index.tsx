import { createBrowserRouter } from "react-router";
import Layout from "../layout";
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
import { homePath, signInPath, signUpPath, usersPath } from "./paths";

export const router = createBrowserRouter([
  {
    path: homePath(),
    Component: Layout,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: usersPath(), element: <Users /> },
      { path: `${usersPath()}/:userId`, element: <User /> },
      { path: `${usersPath()}/:userId/edit`, element: <UserEdit /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: signInPath(), element: <SignIn /> },
  { path: signUpPath(), element: <SignUp /> },
]);

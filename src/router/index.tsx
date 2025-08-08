import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../dashboard-layout';
import {
  Error,
  Home,
  NotFound,
  SignIn,
  SignUp,
  User,
  UserEdit,
  Users,
} from '../pages';
import GuestRoute from './guest-route';
import { signInPath, signUpPath, usersPath } from './paths';
import ProtectedRoute from './protected-route';
import RootLayout from './root-layout';
import withSuspense from './withSuspense';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: withSuspense(Error),
    children: [
      {
        element: <GuestRoute />,
        children: [
          { path: signInPath(), element: withSuspense(SignIn) },
          { path: signUpPath(), element: withSuspense(SignUp) },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              { index: true, element: withSuspense(Home) },
              { path: usersPath(), element: withSuspense(Users) },
              { path: `${usersPath()}/:userId`, element: withSuspense(User) },
              {
                path: `${usersPath()}/:userId/edit`,
                element: withSuspense(UserEdit),
              },
              { path: '*', element: withSuspense(NotFound) },
            ],
          },
        ],
      },
    ],
  },
]);

import { lazy } from "react";

export const Error = lazy(() => import("./error"));
export const Home = lazy(() => import("./home"));
export const NotFound = lazy(() => import("./not-found"));
export const SignIn = lazy(() => import("./sign-in"));
export const SignUp = lazy(() => import("./sign-up"));
export const User = lazy(() => import("./user"));
export const UserEdit = lazy(() => import("./user-edit"));
export const Users = lazy(() => import("./users"));

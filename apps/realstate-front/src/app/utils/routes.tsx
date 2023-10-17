import { createBrowserRouter } from "react-router-dom";
import { SignInPage, SignUpPage, PasswordRecoveryPage, ErrorPage } from "../components/pages";

export const router = createBrowserRouter([
  { path: "/", element: <SignInPage />, errorElement: <ErrorPage />,},
  { path: "/sign-up", element: <SignUpPage />, errorElement: <ErrorPage />,},
  { path: "/password-recovery", element: <PasswordRecoveryPage />, errorElement: <ErrorPage />,}
]);
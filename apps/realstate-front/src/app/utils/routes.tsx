import { createBrowserRouter } from "react-router-dom";
import { SignInPage, ErrorPage } from "../components/pages";

export const router = createBrowserRouter([
  { path: "/", element: <SignInPage />, errorElement: <ErrorPage />,}
]);
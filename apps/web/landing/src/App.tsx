import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home-page";
import SignupPage from "./pages/signup-page";
import LoginPage from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />
  },
  {
    path: "/auth/login",
    element: <LoginPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

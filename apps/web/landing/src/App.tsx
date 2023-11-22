import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/home-page";
import SignupPage from "./pages/signup-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

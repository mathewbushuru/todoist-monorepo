import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import SignupPage from "@/pages/signup-page";
import LoginPage from "@/pages/login-page";
import HomePage from "@/pages/home-page";

import { store } from "@/store/store";
import useAuth from "@/hooks/use-auth";

const publicRoutes = [
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
];

const protectedRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

const publicRouter = createBrowserRouter(publicRoutes);
const protectedRouter = createBrowserRouter(protectedRoutes);

function AppRouter() {
  const { user } = useAuth();

  const router = user ? protectedRouter : publicRouter;

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <ReduxProvider store={store}>
      <AppRouter />
    </ReduxProvider>
  );
}

export default App;

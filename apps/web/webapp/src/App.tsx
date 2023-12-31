import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import SignupPage from "@/pages/signup-page";
import LoginPage from "@/pages/login-page";
import HomePage from "@/pages/home-page";

import useAuth from "@/hooks/use-auth";
import { useVerifyTokenQuery } from "@/api";
import { store, useAppDispatch } from "@/store/store";
import { setCredentials } from "@/store/features/auth-slice";

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
    errorElement: <HomePage />,
  },
  {
    path: "/auth/signup",
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: "/auth/login",
    element: <Navigate to="/" replace={true} />,
  },
];

const publicRouter = createBrowserRouter(publicRoutes);
const protectedRouter = createBrowserRouter(protectedRoutes);

function AppRouter() {
  const { user, currentToken } = useAuth();
  const router = user ? protectedRouter : publicRouter;

  const dispatch = useAppDispatch();

  const { data: userData } = useVerifyTokenQuery();

  useEffect(() => {
    // if client token is validated by BE, update state with userdata which automatically logs in user
    if (userData && currentToken) {
      dispatch(setCredentials({ user: userData, token: currentToken }));
    }
  }, [!!userData]);

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

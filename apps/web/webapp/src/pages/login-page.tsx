import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Button, LabelledInput } from "ui";

import { type LoginRequestType } from "@/types/auth";
import { useAppDispatch } from "@/store/store";
import { setCredentials } from "@/store/features/auth-slice";
import { useGetRootQuery, useLoginMutation } from "@/api";

import GoogleIcon from "@/assets/google-icon";
import FacebookIcon from "@/assets/facebook-icon";
import AppleIcon from "@/assets/apple-icon";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  // ping API in case it has spin down due to inactivity, so that it's ready for login
  const { data: _ } = useGetRootQuery(undefined, { pollingInterval: 1000 });

  const [loginTrigger, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    if (email.length === 0) {
      setEmailHasError(true);
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailHasError(true);
      return;
    }

    setEmailHasError(false);

    if (password.length === 0) {
      setPasswordHasError(true);
      return;
    }

    setPasswordHasError(false);

    const loginData: LoginRequestType = { email, password };

    try {
      const loginResponse = await loginTrigger(loginData).unwrap();

      setLoginErrorMessage("");
      console.log("Login successful");

      const { jwtToken, message: _, ...user } = loginResponse;

      navigate("/");
      dispatch(setCredentials({ user, token: jwtToken }));
    } catch (error) {
      console.log(error);
      setLoginErrorMessage("Wrong email or password");
      setEmail("");
      setPassword("");
      return;
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex max-w-md flex-col gap-4 px-4 py-8 text-foreground">
        <a href="https://todoist.mathewbushuru.com/">
          <Logo />
        </a>

        <p className="my-3 text-3xl font-bold">Log in</p>

        <Button variant="outline" size="lg" className="text-lg font-semibold">
          <GoogleIcon className="h-5 w-5" />
          Continue with Google
        </Button>
        <Button variant="outline" size="lg" className="text-lg font-semibold">
          <FacebookIcon className="h-5 w-5" />
          Continue with Facebook
        </Button>
        <Button variant="outline" size="lg" className="text-lg font-semibold">
          <AppleIcon className="h-5 w-5" />
          Continue with Apple
        </Button>

        <div className="my-6 space-y-4">
          {loginErrorMessage.length > 0 && (
            <p className="text-xs font-light text-primary">
              {loginErrorMessage}
            </p>
          )}

          <LabelledInput
            type="email"
            placeholder="Enter your email..."
            label="Email"
            inputContent={email}
            onInputContentChange={setEmail}
            hasError={emailHasError}
          />
          <LabelledInput
            type="password"
            placeholder="Enter your password..."
            label="Password"
            inputContent={password}
            onInputContentChange={setPassword}
            hasError={passwordHasError}
          />
        </div>

        <Button
          size="lg"
          className="text-lg font-semibold"
          onClick={handleLogin}
          disabled={isLoading}
        >
          Log in
        </Button>

        <p className="text-sm leading-5 text-muted">
          By continuing with Google, Apple, or Email, you agree to Todoist's{" "}
          <span className="cursor-pointer underline">Terms of Service</span> and{" "}
          <span className="cursor-pointer underline">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-center text-sm leading-5 text-muted">
          Don't have an account?{" "}
          <span
            className="cursor-pointer underline"
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Button, LabelledInput } from "ui";

import { type User } from "@/types/auth";
import { useAppDispatch } from "@/store/store";
import { setCredentials } from "@/store/features/auth-slice";

import GoogleIcon from "@/assets/google-icon";
import FacebookIcon from "@/assets/facebook-icon";
import AppleIcon from "@/assets/apple-icon";

const loginUrl = "http://localhost:5000/auth/login";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const [loginErrorMessage, setLoginErrorMessage] = useState("");

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

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const loginResponse = await response.json();
    console.log(loginResponse);

    if (!response.ok) {
      setLoginErrorMessage("Wrong email or password");
      setEmail("");
      setPassword("");
      return;
    }

    setLoginErrorMessage("");
    console.log("Login successful");

    const user: User = {
      id: loginResponse.id,
      email: loginResponse.email,
      fullName: loginResponse.fullName,
      teamAccount: loginResponse.teamAccount,
      usageMode: loginResponse.usageMode,
      createdAt: loginResponse.createdAt,
      updatedAt: loginResponse.updatedAt,
    };

    dispatch(setCredentials({ user, token: loginResponse.jwtToken }));
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo, Button, LabelledInput } from "ui";

import GoogleIcon from "@/assets/google-icon";
import FacebookIcon from "@/assets/facebook-icon";
import AppleIcon from "@/assets/apple-icon";

const signupUrl = "https://todoist-d3gq.onrender.com/auth/signup";
// const signupUrl = "http://localhost:5000/auth/signup";

interface signupDataType {
  email: string;
  password: string;
  fullName: string;
  teamAccount: "yes" | "no";
  usageMode: "personal" | "work" | "education";
}

export default function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailHasError, setEmailHasError] = useState(false);
  const [passwordHasError, setPasswordHasError] = useState(false);

  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  const handleSignup = async () => {
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

    const signupData: signupDataType = {
      email,
      password,
      fullName: email[0].toUpperCase(),
      teamAccount: "no",
      usageMode: "personal",
    };

    const response = await fetch(signupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    const signupResponse = await response.json();
    console.log(signupResponse);

    if (!response.ok) {
      setSignupErrorMessage(signupResponse.errorMessage);
      return;
    }

    console.log("sign up successful");

    navigate("/auth/login")
  };

  return (
    <div className="flex justify-center">
      <div className="flex max-w-md flex-col gap-4 px-4 py-8 text-foreground">
        <a href="https://todoist.mathewbushuru.com/">
          <Logo />
        </a>

        <p className="my-3 text-3xl font-bold">Sign up</p>

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
          {signupErrorMessage.length > 0 && (
            <p className="text-xs font-light text-primary">
              {signupErrorMessage}
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
          onClick={handleSignup}
        >
          Sign up with email
        </Button>

        <p className="text-sm leading-5 text-muted">
          By continuing with Google, Apple, or Email, you agree to Todoist's{" "}
          <span className="cursor-pointer underline">Terms of Service</span> and{" "}
          <span className="cursor-pointer underline">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-center text-sm leading-5 text-muted">
          Already signed up?{" "}
          <span
            className="cursor-pointer underline"
            onClick={() => navigate("/auth/login")}
          >
            Go to login
          </span>
        </p>
      </div>
    </div>
  );
}

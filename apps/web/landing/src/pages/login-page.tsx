import { useNavigate } from "react-router-dom";
import { Logo, Button, LabelledInput } from "ui";

import GoogleIcon from "@/assets/google-icon";
import FacebookIcon from "@/assets/facebook-icon";
import AppleIcon from "@/assets/apple-icon";

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="flex max-w-md flex-col gap-4 px-4 py-8 text-foreground">
        <Logo onClick={() => navigate("/")}/>

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
          <LabelledInput
            type="email"
            placeholder="Enter your email..."
            label="Email"
          />
          <LabelledInput
            type="password"
            placeholder="Enter your password..."
            label="Password"
          />
        </div>

        <Button size="lg" className="text-lg font-semibold">
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

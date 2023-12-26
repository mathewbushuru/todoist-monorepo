import { MenuIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo, Button } from "ui";

const navItems = ["Features", "Templates", "For Teams", "Resources", "Pricing"];

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-0 border-b bg-background lg:border-b-0  lg:px-8  ">
      <div className="mx-auto flex items-center justify-between p-4 xl:max-w-7xl xl:px-16 2xl:max-w-[100rem]">
        <Logo />
        <MenuIcon className="lg:hidden" />
        <div className="hidden lg:flex lg:items-center xl:gap-3">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="font-normal tracking-wide"
            >
              {item}
            </Button>
          ))}
          <div className="h-full w-[1.5px] bg-secondary">&nbsp;</div>
          <Button
            variant="ghost"
            className="font-normal tracking-wide"
            onClick={() => navigate("/auth/login")}
          >
            Log in
          </Button>
          <Button
            className="font-normal tracking-wide"
            onClick={() => navigate("/auth/signup")}
          >
            Start for free
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
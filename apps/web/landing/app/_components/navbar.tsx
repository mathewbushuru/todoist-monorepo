import { MenuIcon } from "lucide-react";
import { Logo, Button } from "ui";

const navItems = ["Features", "Templates", "For Teams", "Resources", "Pricing"];

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 mx-auto  border-b bg-background lg:border-b-0  lg:px-8  ">
      <div className="flex items-center justify-between p-4 xl:max-w-7xl xl:px-16 ">
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
          <a href="https://todoistapp.mathewbushuru.com/auth/login">
            <Button variant="ghost" className="font-normal tracking-wide">
              Log in
            </Button>
          </a>
          <a href="https://todoistapp.mathewbushuru.com/auth/signup">
            <Button className="font-normal tracking-wide">
              Start for free
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import { Button } from "ui";

function Navbar() {
  return (
    <>
      <div className="text-base">Navbar</div>
      <Button>Default button</Button>
      <Button variant="ghost">Default ghost button</Button>
      <Button variant="link">Default link button</Button>
      <Button size="sm">Default small button</Button>
      <Button size="lg">Default large button</Button>
    </>
  );
}

export default Navbar;

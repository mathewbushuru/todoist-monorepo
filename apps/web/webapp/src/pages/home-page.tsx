import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "ui";
import { Button } from "ui";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col items-center gap-3 pt-24 text-center">
          <p>Log in successful</p>

          <Drawer >
            <DrawerTrigger asChild>
              <Button variant="outline">Drawer</Button>
            </DrawerTrigger>
            <DrawerContent position="left" size="default">
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <div className="h-28 bg-rose-500">Drawer content goes here</div>
              <DrawerFooter>
                <Button>Save changes</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default HomePage;

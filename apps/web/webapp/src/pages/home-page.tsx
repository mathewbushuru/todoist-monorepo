import {
  PanelLeftOpen,
  MessageSquare,
  SlidersHorizontal,
  MoreHorizontal,
} from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent } from "ui";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex min-h-screen flex-col">
        {/* Header  */}
        <div className="">
          {/* Open/Close sidebar - smaller screens  */}
          <div className="flex items-center justify-start pl-3 pt-6">
            <Drawer>
              <DrawerTrigger>
                <PanelLeftOpen className="h-6 w-6 text-muted/80 sm:hidden" />
              </DrawerTrigger>
              <DrawerContent>Side Panel</DrawerContent>
            </Drawer>
          </div>

          {/* Header content  */}
          <div className="flex items-center justify-between  py-6 pl-10 pr-10">
            <h3 className="text-2xl font-semibold">Inbox</h3>
            <div className="flex items-center gap-3 text-muted/80">
              <SlidersHorizontal className="h-5 w-5 cursor-pointer" />
              <MessageSquare className="h-6 w-6 cursor-pointer" />
              <MoreHorizontal className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Tasks  */}
        <div className="flex-1 bg-emerald-100"></div>
      </div>
    </main>
  );
}

export default HomePage;

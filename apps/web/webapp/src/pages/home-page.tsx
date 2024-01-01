import {
  PanelLeftOpen,
  MessageSquare,
  SlidersHorizontal,
  MoreHorizontal,
} from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent } from "ui";

import SideNavigation from "@/components/side-navigation";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex">
        {/* Side panel  */}
        <div className="hidden sm:block sm:w-1/4 lg:w-1/5">
          <SideNavigation />
        </div>

        {/* Main content  */}
        <div className="flex min-h-screen flex-1 flex-col">
          {/* Header  */}
          <div>
            {/* Header open/close sidebar - smaller screens  */}
            <div className="flex items-center justify-start pl-3 pt-6">
              <Drawer>
                <DrawerTrigger>
                  <PanelLeftOpen className="h-6 w-6 text-muted/80 sm:hidden" />
                </DrawerTrigger>
                <DrawerContent>
                  <SideNavigation />
                </DrawerContent>
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
          <div className="flex flex-1 flex-col items-center gap-4 bg-emerald-100"></div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

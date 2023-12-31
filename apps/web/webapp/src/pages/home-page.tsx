import {
  PanelLeftOpen,
  MessageSquare,
  SlidersHorizontal,
  MoreHorizontal,
  PlusCircle,
  Search,
  Inbox,
  CalendarClock,
  CalendarDays,
  LayoutGrid,
  SquareAsterisk
} from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent } from "ui";
import { Button } from "ui";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex">
        {/* Side panel  */}
        <nav className="bg-backgroundMuted hidden w-1/4 flex-col items-stretch gap-1 px-3 py-6 sm:flex">
          {/* Side panel header - Settings Dropdown button, notifications */}
          <div className="text-xs h-12"></div>
          {/* Side panel add task  */}
          <Button variant="ghost" contentAlign="left" size="sm">
            <PlusCircle className="h-5 w-5"/>
            Add task
          </Button>

          {/* Side panel filters  */}
          <Button variant="ghost" contentAlign="left" size="sm">
            <Search className="h-5 w-5"/>
            Search
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <Inbox className="h-5 w-5"/>
            Inbox
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <CalendarClock className="h-5 w-5"/>
            Today
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <CalendarDays className="h-5 w-5"/>
            Upcoming
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <LayoutGrid className="h-5 w-5"/>
            Filters & Labels
          </Button>

          {/* Side panel projects  */}
          <h3 className="mt-4 font-semibold text-muted/80">My Projects</h3>
          <Button variant="ghost" contentAlign="left" size="sm">
            <SquareAsterisk className="h-5 w-5"/>
            Work
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <SquareAsterisk className="h-5 w-5"/>
            School
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <SquareAsterisk className="h-5 w-5"/>
            Free Time
          </Button>
          <Button variant="ghost" contentAlign="left" size="sm">
            <SquareAsterisk className="h-5 w-5"/>
            Code
          </Button>
        </nav>

        {/* Main content  */}
        <div className="flex min-h-screen flex-1 flex-col">
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
      </div>
    </main>
  );
}

export default HomePage;

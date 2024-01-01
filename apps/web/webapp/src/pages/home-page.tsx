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
  SquareAsterisk,
  ChevronDown,
  UserCircle,
  Settings,
  ActivitySquare,
  Printer,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Copy,
  Puzzle,
  Keyboard,
  GraduationCap,
  TabletSmartphone,
  Star,
  RefreshCw,
  LogOut,
} from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent } from "ui";
import {
  DropdownButton,
  DropdownButtonContent,
  DropdownButtonItem,
  DropdownButtonLabel,
  DropdownButtonSeparator,
  DropdownButtonTrigger,
  DropdownButtonGroup,
  DropdownButtonPortal,
  DropdownButtonSub,
  DropdownButtonSubContent,
  DropdownButtonSubTrigger,
  DropdownButtonShortcut,
} from "ui";

import { AppButton } from "@/components/app-button";

function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <div className="flex">
        {/* Side panel  */}
        <nav className="bg-backgroundMuted hidden w-1/4 flex-col items-stretch gap-1 px-3 py-6 sm:flex">
          {/* Side panel header - Settings Dropdown button, notifications */}
          <div className="h-12 text-xs">
            <DropdownButton>
              <DropdownButtonTrigger asChild>
                <AppButton
                  variant="ghost"
                  className="hover:bg-primary/5"
                  size="sm"
                >
                  <UserCircle className="text-muted/80" />
                  <span>Mathew</span>
                  <ChevronDown className="h-4 w-4 text-muted/80" />
                </AppButton>
              </DropdownButtonTrigger>
              <DropdownButtonContent>
                <DropdownButtonLabel>Mathew Bushuru</DropdownButtonLabel>

                <DropdownButtonSeparator />

                <DropdownButtonGroup>
                  <DropdownButtonItem>
                    <Settings className="mr-2 h-4 w-4 text-muted/80" />
                    <span>Settings</span>
                    <DropdownButtonShortcut>O then S</DropdownButtonShortcut>
                  </DropdownButtonItem>
                  <DropdownButtonItem>
                    <ActivitySquare className="mr-2 h-4 w-4 text-muted/80" />
                    <span>Activity Log</span>
                    <DropdownButtonShortcut>G then A</DropdownButtonShortcut>
                  </DropdownButtonItem>
                  <DropdownButtonItem>
                    <Printer className="mr-2 h-4 w-4 text-muted/80" />
                    <span>Print</span>
                    <DropdownButtonShortcut>⌘P</DropdownButtonShortcut>
                  </DropdownButtonItem>
                  <DropdownButtonSub>
                    <DropdownButtonSubTrigger>
                      <BookOpen className="mr-2 h-4 w-4 text-muted/80" />
                      <span>Resources</span>
                    </DropdownButtonSubTrigger>
                    <DropdownButtonPortal>
                      <DropdownButtonSubContent>
                        <DropdownButtonItem>
                          <HelpCircle className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Help center</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <Lightbulb className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Inspiration</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <Copy className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Templates</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <Puzzle className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Integration</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <Keyboard className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Keyboard shortcuts</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <GraduationCap className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Getting started guide</span>
                        </DropdownButtonItem>
                        <DropdownButtonItem>
                          <TabletSmartphone className="mr-2 h-4 w-4 text-muted/80" />
                          <span>Download apps</span>
                        </DropdownButtonItem>
                      </DropdownButtonSubContent>
                    </DropdownButtonPortal>
                  </DropdownButtonSub>
                </DropdownButtonGroup>

                <DropdownButtonSeparator />

                <DropdownButtonItem>
                  <Star className="mr-2 h-4 w-4 text-amber-400" />
                  <span>Upgrade to Pro</span>
                </DropdownButtonItem>

                <DropdownButtonSeparator />

                <DropdownButtonItem>
                  <RefreshCw className="mr-2 h-4 w-4 text-muted/80" />
                  <span>Sync</span>
                  <DropdownButtonShortcut>
                    {Math.floor(Math.random() * 12)} minutes ago
                  </DropdownButtonShortcut>
                </DropdownButtonItem>

                <DropdownButtonSeparator />

                <DropdownButtonItem>
                  <LogOut className="mr-2 h-4 w-4 text-muted/80" />
                  <span>Log out</span>
                </DropdownButtonItem>
              </DropdownButtonContent>
            </DropdownButton>
          </div>
          {/* Side panel add task  */}
          <AppButton
            variant="ghost"
            size="sm"
            className="mb-2 justify-start text-primary hover:bg-primary/5"
          >
            <PlusCircle className="h-5 w-5" />
            Add task
          </AppButton>

          {/* Side panel filters  */}
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <Search className="h-4 w-4 text-muted/80" />
            Search
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start bg-primary/10 font-light text-primary hover:bg-primary/10"
          >
            <Inbox className="h-4 w-4 text-primary" />
            Inbox
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <CalendarClock className="h-4 w-4 text-muted/80" />
            Today
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <CalendarDays className="h-4 w-4 text-muted/80" />
            Upcoming
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <LayoutGrid className="h-4 w-4 text-muted/80" />
            Filters & Labels
          </AppButton>

          {/* Side panel projects  */}
          <h3 className="mb-1 mt-3 px-2 font-semibold text-muted/80">
            My Projects
          </h3>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <SquareAsterisk className="h-4 w-4 text-muted/80" />
            Work
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <SquareAsterisk className="h-4 w-4 text-muted/80" />
            School
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <SquareAsterisk className="h-4 w-4 text-muted/80" />
            Free Time
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="justify-start font-light hover:bg-primary/5"
          >
            <SquareAsterisk className="h-4 w-4 text-muted/80" />
            Code
          </AppButton>
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
          <div className="flex flex-1 flex-col items-center gap-4 bg-emerald-100"></div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;

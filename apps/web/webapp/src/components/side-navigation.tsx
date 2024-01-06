import {
  Search,
  Inbox,
  CalendarClock,
  CalendarDays,
  LayoutGrid,
  SquareAsterisk,
} from "lucide-react";
import { Button } from "ui";

import ProfileDropdown from "@/components/profile-dropdown";
import AddTaskModal from "@/components/add-task-modal";

export default function SideNavigation() {
  return (
    <nav className="bg-backgroundMuted flex w-full h-full flex-col items-stretch gap-1 px-3 py-6">
      {/* Profile */}
      <ProfileDropdown />

      {/* Add task  */}
      <AddTaskModal />

      {/* Filters - Search, Inbox, Today, Upcoming, Labels */}
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <Search className="h-5 w-5 stroke-1 text-muted/90" />
        Search
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start bg-primary/10 font-light text-primary hover:bg-primary/10"
      >
        <Inbox className="h-5 w-5 stroke-1 text-primary" />
        Inbox
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <CalendarClock className="h-5 w-5 stroke-1 text-muted/90" />
        Today
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <CalendarDays className="h-5 w-5 stroke-1 text-muted/90" />
        Upcoming
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <LayoutGrid className="h-5 w-5 stroke-1 text-muted/90" />
        Filters & Labels
      </Button>

      {/* Projects  */}
      <h3 className="mb-1 mt-3 cursor-default px-2 font-semibold text-muted/80">
        My Projects
      </h3>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-5 w-5 stroke-1 text-muted/90" />
        Work
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-5 w-5 stroke-1 text-muted/90" />
        School
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-5 w-5 stroke-1 text-muted/90" />
        Free Time
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-5 w-5 stroke-1 text-muted/90" />
        Code
      </Button>
    </nav>
  );
}

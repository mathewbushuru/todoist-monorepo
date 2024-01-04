import {
  PlusCircle,
  Search,
  Inbox,
  CalendarClock,
  CalendarDays,
  LayoutGrid,
  SquareAsterisk,
} from "lucide-react";
import { Button } from "ui";

import ProfileDropdown from "@/components/profile-dropdown";

export default function SideNavigation() {
  return (
    <nav className="bg-backgroundMuted flex w-full h-full flex-col items-stretch gap-1 px-3 py-6">
      {/* Profile */}
      <ProfileDropdown />

      {/* Add task  */}
      <Button
        variant="ghost"
        size="sm"
        className="mb-2 mt-2 justify-start text-primary hover:bg-primary/5"
      >
        <PlusCircle className="h-5 w-5" />
        Add task
      </Button>

      {/* Filters - Search, Inbox, Today, Upcoming, Labels */}
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <Search className="h-4 w-4 text-muted/80" />
        Search
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start bg-primary/10 font-light text-primary hover:bg-primary/10"
      >
        <Inbox className="h-4 w-4 text-primary" />
        Inbox
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <CalendarClock className="h-4 w-4 text-muted/80" />
        Today
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <CalendarDays className="h-4 w-4 text-muted/80" />
        Upcoming
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <LayoutGrid className="h-4 w-4 text-muted/80" />
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
        <SquareAsterisk className="h-4 w-4 text-muted/80" />
        Work
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-4 w-4 text-muted/80" />
        School
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-4 w-4 text-muted/80" />
        Free Time
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="justify-start font-light hover:bg-primary/5"
      >
        <SquareAsterisk className="h-4 w-4 text-muted/80" />
        Code
      </Button>
    </nav>
  );
}

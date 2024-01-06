import { SlidersHorizontal, Rows3, Columns3, CalendarDays } from "lucide-react";
import {
  DropdownButton,
  DropdownButtonTrigger,
  DropdownButtonContent,
  DropdownButtonLabel,
  DropdownButtonItem,
  DropdownButtonSeparator,
  DropdownButtonSub,
  DropdownButtonSubTrigger,
  DropdownButtonPortal,
  DropdownButtonSubContent,
  DropdownButtonCheckboxItem,
} from "ui";

export default function OptionsDropdown() {
  return (
    <DropdownButton>
      <DropdownButtonTrigger className="outline-none">
        <SlidersHorizontal className="h-5 w-5 cursor-pointer" />
      </DropdownButtonTrigger>
      <DropdownButtonContent className="mr-2 mt-2">
        <DropdownButtonLabel>
          <span>View</span>
        </DropdownButtonLabel>

        <div className="flex justify-around gap-2 rounded-md bg-muted/5 p-2">
          <DropdownButtonItem className="pointer-events-none bg-background">
            <div className="flex min-w-[4rem] flex-col items-center gap-1 text-foreground/90">
              <Rows3 className="h-6 w-6 stroke-1" />
              <span className="text-sm font-light">List</span>
            </div>
          </DropdownButtonItem>
          <DropdownButtonItem>
            <div className="flex min-w-[4rem] flex-col items-center gap-1  text-foreground/90">
              <Columns3 className="h-6 w-6 stroke-1" />
              <span className="text-sm font-light">Board</span>
            </div>
          </DropdownButtonItem>
          <DropdownButtonItem>
            <div className="flex min-w-[4rem] flex-col items-center gap-1 text-foreground/90">
              <CalendarDays className="h-6 w-6 stroke-1" />
              <span className="text-sm font-light">Calendar</span>
            </div>
          </DropdownButtonItem>
        </div>

        <DropdownButtonSeparator />

        <DropdownButtonLabel>
          <span>Sort by</span>
        </DropdownButtonLabel>

        <DropdownButtonSub>
          <DropdownButtonSubTrigger>
            <span>Grouping </span>
            <span className="text-xs text-muted/80">&nbsp;-&nbsp;None (default)</span>
          </DropdownButtonSubTrigger>
          <DropdownButtonPortal>
            <DropdownButtonSubContent>
              <DropdownButtonCheckboxItem checked={true}>
                <span>None (default)</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Due date</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Date added</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Priority</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Label</span>
              </DropdownButtonCheckboxItem>
            </DropdownButtonSubContent>
          </DropdownButtonPortal>
        </DropdownButtonSub>

        <DropdownButtonSub>
          <DropdownButtonSubTrigger>
            <span>Sorting</span>
            <span className="text-xs text-muted/80">&nbsp;-&nbsp;Manual (default)</span>
          </DropdownButtonSubTrigger>
          <DropdownButtonPortal>
            <DropdownButtonSubContent>
              <DropdownButtonCheckboxItem checked={true}>
                <span>Manual (default)</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Name</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Due date</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Date added</span>
              </DropdownButtonCheckboxItem>
              <DropdownButtonCheckboxItem>
                <span>Priority</span>
              </DropdownButtonCheckboxItem>
            </DropdownButtonSubContent>
          </DropdownButtonPortal>
        </DropdownButtonSub>
      </DropdownButtonContent>
    </DropdownButton>
  );
}

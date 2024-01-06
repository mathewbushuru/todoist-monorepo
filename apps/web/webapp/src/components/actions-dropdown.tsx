import {
  MoreHorizontal,
  PlusSquare,
  Download,
  Upload,
  Mail,
  List,
  Puzzle,
} from "lucide-react";
import {
  DropdownButton,
  DropdownButtonTrigger,
  DropdownButtonContent,
  DropdownButtonItem,
  DropdownButtonShortcut,
  DropdownButtonSeparator,
} from "ui";

export default function ActionsDropdown() {
  return (
    <DropdownButton>
      <DropdownButtonTrigger className="outline-none">
        <MoreHorizontal className="h-6 w-6 cursor-pointer" />
      </DropdownButtonTrigger>
      <DropdownButtonContent className="mr-2">
        <DropdownButtonItem>
          <PlusSquare className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Add section</span>
          <DropdownButtonShortcut>S</DropdownButtonShortcut>
        </DropdownButtonItem>

        <DropdownButtonSeparator />

        <DropdownButtonItem>
          <Download className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Import from template</span>
        </DropdownButtonItem>
        <DropdownButtonItem>
          <Upload className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Export as a template</span>
        </DropdownButtonItem>

        <DropdownButtonSeparator />

        <DropdownButtonItem>
          <Mail className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Email tasks to this project</span>
        </DropdownButtonItem>
        <DropdownButtonItem>
          <List className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Project calendar feed</span>
        </DropdownButtonItem>

        <DropdownButtonSeparator />

        <DropdownButtonItem>
          <Puzzle className="mr-2 h-5 w-5 stroke-1 text-muted/80" />
          <span>Add extension ...</span>
        </DropdownButtonItem>
      </DropdownButtonContent>
    </DropdownButton>
  );
}

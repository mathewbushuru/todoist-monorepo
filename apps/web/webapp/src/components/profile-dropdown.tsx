import {
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

export default function ProfileDropdown() {
  return (
    <DropdownButton>
      <DropdownButtonTrigger asChild>
        <AppButton
          variant="ghost"
          className="justify-start hover:bg-primary/5 mt-2"
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
            {Math.floor(Math.random() * 4)} minutes ago
          </DropdownButtonShortcut>
        </DropdownButtonItem>

        <DropdownButtonSeparator />

        <DropdownButtonItem>
          <LogOut className="mr-2 h-4 w-4 text-muted/80" />
          <span>Log out</span>
        </DropdownButtonItem>
      </DropdownButtonContent>
    </DropdownButton>
  );
}

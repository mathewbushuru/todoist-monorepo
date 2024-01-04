import * as React from "react";
import * as DropdownButtonPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "../lib/utils";

const DropdownButton = DropdownButtonPrimitive.Root;

const DropdownButtonTrigger = DropdownButtonPrimitive.Trigger;

const DropdownButtonGroup = DropdownButtonPrimitive.Group;

const DropdownButtonPortal = DropdownButtonPrimitive.Portal;

const DropdownButtonSub = DropdownButtonPrimitive.Sub;

const DropdownButtonRadioGroup = DropdownButtonPrimitive.RadioGroup;

const DropdownButtonSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex items-center px-2 py-1.5 cursor-default select-none rounded-sm text-sm outline-none data-[state=open]:bg-muted/10",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownButtonPrimitive.SubTrigger>
  );
});

const DropdownButtonSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden bg-popover rounded-md border p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  );
});

const DropdownButtonContent = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.Portal>
      <DropdownButtonPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[14rem] ml-2 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </DropdownButtonPrimitive.Portal>
  );
});

const DropdownButtonItem = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center px-2 py-1.5 rounded-md text-sm focus:bg-muted/10 focus:outline-none",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
});

const DropdownButtonCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-muted/10 outline-none",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownButtonPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownButtonPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownButtonPrimitive.CheckboxItem>
  );
});

const DropdownButtonRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.RadioItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-muted/10",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownButtonPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownButtonPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownButtonPrimitive.RadioItem>
  );
});

const DropdownButtonLabel = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.Label
      ref={ref}
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
});

const DropdownButtonSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownButtonPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownButtonPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return (
    <DropdownButtonPrimitive.Separator
      ref={ref}
      className={cn("h-px my-1 -mx-1 bg-muted/20", className)}
      {...props}
    />
  );
});

const DropdownButtonShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("text-xs ml-auto tracking-widest opacity-60", className)}
      {...props}
    />
  );
};

export {
  DropdownButton,
  DropdownButtonTrigger,
  DropdownButtonContent,
  DropdownButtonItem,
  DropdownButtonCheckboxItem,
  DropdownButtonRadioItem,
  DropdownButtonLabel,
  DropdownButtonSeparator,
  DropdownButtonShortcut,
  DropdownButtonGroup,
  DropdownButtonPortal,
  DropdownButtonSub,
  DropdownButtonSubContent,
  DropdownButtonSubTrigger,
  DropdownButtonRadioGroup,
};

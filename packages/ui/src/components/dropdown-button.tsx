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
        "ui-flex ui-items-center ui-px-2 ui-py-1.5 ui-cursor-default ui-select-none ui-rounded-sm ui-text-sm ui-outline-none data-[state=open]:ui-bg-muted/10",
        inset && "ui-pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ui-ml-auto ui-h-4 ui-w-4" />
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
        "ui-z-50 ui-min-w-[8rem] ui-overflow-hidden ui-bg-popover ui-rounded-md ui-border ui-p-1 ui-text-popover-foreground ui-shadow-lg data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=open]:ui-zoom-in-95 data-[state=closed]:ui-zoom-out-95 data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-fade-in-0 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
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
          "ui-z-50 ui-min-w-[14rem] ui-ml-2 ui-overflow-hidden ui-rounded-md ui-border ui-bg-popover ui-p-1 ui-text-popover-foreground ui-shadow-md data-[state=open]:ui-animate-in data-[state=closed]:ui-animate-out data-[state=open]:ui-fade-in-0 data-[state=closed]:ui-fade-out-0 data-[state=open]:ui-zoom-in-95 data-[state=closed]:ui-zoom-out-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2",
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
        "ui-relative ui-flex ui-cursor-pointer ui-select-none ui-items-center ui-px-2 ui-py-1.5 ui-rounded-md ui-text-sm focus:ui-bg-muted/10 focus:ui-outline-none",
        inset && "ui-pl-8",
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
        "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm focus:ui-bg-muted/10 ui-outline-none",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
        <DropdownButtonPrimitive.ItemIndicator>
          <Check className="ui-h-4 ui-w-4" />
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
        "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-py-1.5 ui-pl-8 ui-pr-2 ui-text-sm ui-outline-none focus:ui-bg-muted/10",
        className
      )}
      {...props}
    >
      <span className="ui-absolute ui-left-2 ui-flex ui-h-3.5 ui-w-3.5 ui-items-center ui-justify-center">
        <DropdownButtonPrimitive.ItemIndicator>
          <Circle className="ui-h-2 ui-w-2 ui-fill-current" />
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
        "ui-px-2 ui-py-1.5 ui-text-sm ui-font-semibold",
        inset && "ui-pl-8",
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
      className={cn("ui-h-px ui-my-1 -ui-mx-1 ui-bg-muted/20", className)}
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
      className={cn(
        "ui-text-xs ui-ml-auto ui-tracking-widest ui-opacity-60",
        className
      )}
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

import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "../lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;

const portalVariants = cva("ui-fixed ui-inset-0 ui-z-30 ui-flex", {
  variants: {
    position: {
      top: "ui-items-start",
      bottom: "ui-items-end",
      left: "ui-justify-start",
      right: "ui-justify-end",
    },
  },
  defaultVariants: { position: "left" },
});

interface DrawerPortalProps
  extends DrawerPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const DrawerPortal = ({ position, children, ...props }: DrawerPortalProps) => {
  return (
    <DrawerPrimitive.Portal {...props}>
      <div className={portalVariants({ position })}>{children}</div>
    </DrawerPrimitive.Portal>
  );
};

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, children, ...props }, ref) => {
  return (
    <DrawerPrimitive.Overlay
      className={cn("ui-fixed ui-inset-0 ui-bg-secondary/50", className)}
      {...props}
      ref={ref}
    />
  );
});

const DrawerVariants = cva(
  "ui-z-50 ui-fixed ui-scale-100 ui-bg-background ui-shadow-lg ui-animate-in ui-duration-300",
  {
    variants: {
      position: {
        top: "ui-w-full ui-slide-in-from-top",
        bottom: "ui-w-full ui-slide-in-from-bottom",
        left: "ui-h-full ui-slide-in-from-left",
        right: "ui-h-full ui-slide-in-from-right",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "ui-max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "ui-h-1/2 sm:ui-h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "ui-h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "ui-h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "ui-h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "ui-h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "ui-max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "ui-w-5/6 sm:ui-w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "ui-w-2/3 sm:ui-w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "ui-w-5/6 sm:ui-w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "ui-w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "ui-w-screen",
      },
    ],
    defaultVariants: {
      position: "left",
      size: "default",
    },
  }
);

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof DrawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ position, size, className, children, ...props }, ref) => {
  return (
    <DrawerPortal position={position}>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(DrawerVariants({ position, size }), className)}
        {...props}
      >
        {children}
        <DrawerPrimitive.Cancel className="ui-absolute ui-right-4 ui-top-4 ui-rounded-sm ui-opacity-70 hover:ui-opacity-100">
          <X className="ui-h-5 ui-w-5" />
          <span className="ui-sr-only">Close</span>
        </DrawerPrimitive.Cancel>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "ui-flex ui-flex-col ui-space-y-2 ui-text-center sm:ui-text-left",
        className
      )}
      {...props}
    />
  );
};

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "ui-flex ui-flex-col-reverse sm:ui-flex-row sm:ui-justify-end sm:ui-space-x-2",
        className
      )}
      {...props}
    />
  );
};

export const DrawerAction = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Action>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Action
      ref={ref}
      className={cn(
        "ui-flex ui-flex-col-reverse ui-items-stretch sm:ui-flex-row sm:ui-items-center sm:ui-justify-end sm:ui-space-x-2",
        className
      )}
      {...props}
    />
  );
});

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "ui-text-lg ui-font-semibold ui-text-foreground",
        className
      )}
      {...props}
    />
  );
});

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Description
      ref={ref}
      className={cn("ui-text-sm ui-text-muted", className)}
      {...props}
    />
  );
});

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};

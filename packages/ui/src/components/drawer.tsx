import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-alert-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "../lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;

const portalVariants = cva("fixed inset-0 z-30 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
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
      className={cn("fixed inset-0 bg-secondary/50", className)}
      {...props}
      ref={ref}
    />
  );
});

const DrawerVariants = cva(
  "z-50 fixed scale-100 bg-background shadow-lg animate-in duration-300",
  {
    variants: {
      position: {
        top: "w-full slide-in-from-top",
        bottom: "w-full slide-in-from-bottom",
        left: "h-full slide-in-from-left",
        right: "h-full slide-in-from-right",
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
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/2 sm:h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-5/6 sm:w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-2/3 sm:w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-5/6 sm:w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
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
        <DrawerPrimitive.Cancel className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
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
        "flex flex-col space-y-2 text-center sm:text-left",
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
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
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
        "flex flex-col-reverse items-stretch sm:flex-row sm:items-center sm:justify-end sm:space-x-2",
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
      className={cn("text-lg font-semibold text-foreground", className)}
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
      className={cn("text-sm text-muted", className)}
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

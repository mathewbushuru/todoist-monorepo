import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

export const buttonVariants = cva(
  "ui-inline-flex ui-items-center ui-justify-center ui-gap-2 ui-rounded-md ui-text-base ui-font-medium ui-transition-opacity disabled:ui-opacity-70",
  {
    variants: {
      variant: {
        default: "ui-bg-primary ui-text-primary-foreground hover:ui-opacity-90",
        ghost: "ui-text-popover-foreground hover:ui-bg-secondary",
        link: "ui-text-link ui-font-normal hover:ui-underline hover:ui-underline-offset-4",
        outline: "ui-bg-transparent ui-border ui-border-secondary ui-text-foreground hover:ui-bg-secondary"
      },
      size: {
        default: "ui-py-2 ui-px-4 ui-h-10",
        sm: "ui-h-9 ui-px-3",
        lg: "ui-h-12 ui-px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: buttonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

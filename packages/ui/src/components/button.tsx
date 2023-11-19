import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

export const buttonVariants = cva(
  "ui-inline-flex ui-items-center ui-justify-center ui-rounded-md ui-text-base ui-font-medium ui-transition-opacity",
  {
    variants: {
      variant: {
        default: "ui-bg-primary ui-text-primary-foreground hover:ui-opacity-90",
        ghost: "ui-text-popover-foreground hover:ui-bg-secondary",
        link: "ui-text-link ui-font-normal hover:ui-underline hover:ui-underline-offset-4",
      },
      size: {
        default: "ui-py-2 ui-px-4 ui-h-10",
        sm: "ui-h-9 ui-px-3",
        lg: "ui-h-11 ui-px-8",
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

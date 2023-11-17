import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center sm:text-left rounded-md text-base font-medium transition-opacity",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        ghost: "text-popover-foreground hover:bg-secondary",
        link: "text-link font-normal hover:underline hover:underline-offset-4",
      },
      size: {
        default: "py-2 px-4 h-10",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center gap-2 rounded-md text-base font-medium transition-opacity disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        ghost: "text-popover-foreground hover:bg-secondary",
        link: "text-link font-normal hover:underline hover:underline-offset-4",
        outline:
          "bg-transparent border border-secondary text-foreground hover:bg-secondary",
      },
      size: {
        default: "py-2 px-4 h-10",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
      },
      contentAlign: {
        default: "justify-center",
        left: "justify-start",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      contentAlign: "default",
    },
  }
);

export interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, variant, size, contentAlign, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className, contentAlign })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

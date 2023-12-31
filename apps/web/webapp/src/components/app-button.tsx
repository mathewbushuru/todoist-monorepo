import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const appButtonVariants = cva(
  "inline-flex justify-center items-center gap-2 rounded-md text-base font-medium transition-opacity disabled:opacity-70",
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
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface buttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof appButtonVariants> {}

export const AppButton = React.forwardRef<HTMLButtonElement, buttonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(appButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
